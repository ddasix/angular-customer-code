import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class AuthErrorHandler implements ErrorHandler{

    constructor(
        private injector: Injector
    ) { }

    handleError(err) {
        const router = this.injector.get(Router);

        console.log(err)
        if(err.rejection.status === 401 || err.rejection.status === 403) {
            router.navigate(['users/login'])
        }

        throw err
    }
}