import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestportComponent } from './testport/testport.component';
import { BalancesComponent } from './balances/balances.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';




const appRoutes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'deposit', component: DepositComponent },
    { path: 'portfolio', component:PortfolioComponent},
    { path: 'test', component:TestportComponent},
    { path: 'balances', component:BalancesComponent},
    { path: 'withdrawals', component:WithdrawalsComponent},
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]  },
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);