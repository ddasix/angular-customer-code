import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';

import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME: string = '_token';

@Injectable()
export class AuthService {
  private url: string = `${environment.apiUrlAuth}/auth/login`
  private headers: Headers = new Headers({'Content-Type': 'application/json'})

  constructor(
    private http: Http
  ) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME)
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token)
  }

  getTokenExpirationDate(token: string): Date {
    const decodedToken = jwt_decode(token);
    
    if(decodedToken.exp === undefined) {
      return null
    }
    
    const date = new Date()
    date.setUTCMilliseconds(decodedToken.exp)

    return date
  }

  isTokenExpired(token?: string): boolean {
    if(!token) {
      token = this.getToken()
    }
    if(!token) {
      return true
    }

    const date = this.getTokenExpirationDate(token)
    if(date === undefined) {
      return false
    }

    return !(date.valueOf() > new Date().valueOf())
  }

  login(user): Promise<string> {
    console.log("login: ",this.url)
    return this.http.post(`${this.url}`, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.text())
  }
}
