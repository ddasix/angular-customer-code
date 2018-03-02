import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild, CanLoad } from "@angular/router";

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authService: AuthService
    ){ }

    canActivate() {
        if(!this.authService.isTokenExpired()) {
            return true;
        }
        
        this.router.navigate(['users/login'])
        return false;
    }

    canActivateChild() {
        return this.canActivate();
    }
}