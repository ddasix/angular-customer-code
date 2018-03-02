import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from "../core/material.module";

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouting } from './login.routing';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRouting,
    CustomMaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [ AuthService ]
})
export class LoginModule { }
