import { Routes, RouterModule } from '@angular/router';


import { CustomerCodeFormGuard } from './customer-code-create/customer-code-create.guard';

import { CustomerCodeComponent } from './customer-code.component';
import { CustomerCodeListComponent } from './customer-code-list/customer-code-list.component';
import { CustomerCodeCreateComponent } from './customer-code-create/customer-code-create.component';
import { CustomerCodeUpdateComponent } from './customer-code-update/customer-code-update.component';
import { CustomerCodeDetailsComponent } from './customer-code-details/customer-code-details.component';

import { AuthGuard } from '../auth/authGuard';

const CUSTOMER_CODE_ROUTES: Routes = [
    {
        path: '', component: CustomerCodeComponent, children: [
            {
                path: '', component: CustomerCodeListComponent, canActivate: [AuthGuard]
            },
            {
                path: 'new', component: CustomerCodeCreateComponent, canDeactivate: [CustomerCodeFormGuard], canActivate: [AuthGuard]
            },
            {
                path: ':customerCode', component: CustomerCodeDetailsComponent, canActivate: [AuthGuard]
            },
            {
                path: ':customerCode/edit', component: CustomerCodeUpdateComponent, canDeactivate: [CustomerCodeFormGuard], canActivate: [AuthGuard]
            },

        ]
    }
]

export const customerCodeRouting = RouterModule.forChild(CUSTOMER_CODE_ROUTES)