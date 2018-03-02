import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions }  from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { CustomerCodeService } from './customer-code.service';
import { customerCodeRouting } from './customer-code.routing';
import { CustomerCodeFormGuard } from './customer-code-create/customer-code-create.guard';

import { CustomerCodeUpdateComponent } from './customer-code-update/customer-code-update.component';
import { CustomerCodeListComponent } from './customer-code-list/customer-code-list.component';
import { CustomerCodeCreateComponent } from './customer-code-create/customer-code-create.component';
import { CustomerCodeComponent } from './customer-code.component';
import { CustomerCodeDetailsComponent } from './customer-code-details/customer-code-details.component';
import { CustomerCodeModalComponent } from './modal/customer-code-modal.component';
import { AuthRequestOptions } from '../auth/authRequestOptions';
import { AuthErrorHandler } from '../auth/authErrorHandler';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    customerCodeRouting,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    CustomerCodeUpdateComponent,
    CustomerCodeListComponent,
    CustomerCodeCreateComponent,
    CustomerCodeComponent,
    CustomerCodeDetailsComponent,
    CustomerCodeModalComponent
  ],
  providers: [CustomerCodeService, CustomerCodeFormGuard,
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    }],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class CustomerCodeModule { }
