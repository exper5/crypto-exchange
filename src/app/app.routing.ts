import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomePageComponent } from './home-page/home-page.component';



const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'dashboard', component: HomeComponent },
  
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);