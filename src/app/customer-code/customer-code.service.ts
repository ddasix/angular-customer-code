import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomerCode } from './customer-code';
import { CrudService } from './crud.service';

import { environment } from '../../environments/environment';

@Injectable()
export class CustomerCodeService implements CrudService{
  private url: string = environment.apiUrl;

  constructor(private http: Http) { }

  /**
   * GET /customerCodes
   */
  getAll(): Promise<CustomerCode[]> {
    return this.http.get(this.url, { headers: this.getHeaders() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  /**
   * GET /customerCodes/:id
   */
  get(id: number): Promise<CustomerCode> {
    return this.http.get(this.getUrl(id), { headers: this.getHeaders() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  getAllBySearchText(searchSrc, searchText): Promise<CustomerCode[]> {
    searchText = searchText.trim();
    const search = searchSrc && searchText ? `/?${searchSrc}_like=` + searchText : '';

    console.log(this.url + search);
    return this.http.get(this.url + search, { headers: this.getHeaders() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  
  removeAll(record: CustomerCode[]): Promise<void> {
    let deleteItems = record.map(item => item.id).join(';')
    return this.http.delete(`${this.url}/${deleteItems}`, { headers: this.getHeaders() })
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  /**
   * POST /customerCodes
   */
  add(record: CustomerCode): Promise<CustomerCode> {
    return this.http.post(this.url, record, { headers: this.getHeaders() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  /**
   * PUT /customerCodes/:id
   */
  update(record: CustomerCode): Promise<CustomerCode> {
    return this.http.put(this.getUrl(record.id), JSON.stringify(record), { headers: this.getHeaders() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)

  }

  /**
   * DELETE /customerCodes/:id
   */
  remove(id: number): Promise<void> {

    return this.http.delete(this.getUrl(id), { headers: this.getHeaders() })
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }
  
  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {    
    let erro = error.message || error;
    console.error('Ocorreu um erro', error);

    return Promise.reject(erro)
  }
}
