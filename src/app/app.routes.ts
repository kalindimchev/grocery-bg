import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
]  

export const AppRouting = RouterModule.forRoot(APP_ROUTES);