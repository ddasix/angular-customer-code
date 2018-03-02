import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';

import { RoutingModule } from './routing/routing.module';
import { AuthRequestOptions } from './auth/authRequestOptions';
import { AuthErrorHandler } from './auth/authErrorHandler';

import { AppComponent } from './app.component';
import { BanipComponent } from './banip/banip.component';
import { RequestOptions, HttpModule } from '@angular/http';
import { AuthGuard } from './auth/authGuard';


@NgModule({
  declarations: [
    AppComponent,
    BanipComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
