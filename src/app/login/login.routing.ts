import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

const LOGIN_ROUTES: Routes = [
    {
        path: 'login', children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
]

export const LoginRouting = RouterModule.forChild(LOGIN_ROUTES)