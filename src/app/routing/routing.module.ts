import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth/authGuard';
import { AuthService } from '../auth/auth.service';

const appRoute: Routes = [
  { path: 'customer-code', loadChildren: 'app/customer-code/customer-code.module#CustomerCodeModule', canActivate: [AuthGuard] },
  { path: 'users', loadChildren: 'app/login/login.module#LoginModule' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class RoutingModule { }
