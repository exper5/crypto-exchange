import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent, CalcComponent } from './dashboard';
import { HighlighterDirective } from './highlighter.directive';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SumPipe } from './_pipes/sum.pipe';
import { PieDataService } from './_services/pie-data.service';
import { TestportComponent } from './testport/testport.component';
import { BalancesComponent } from './balances/balances.component';
import { OrderModule } from './order-pipe/ngx-order.module';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';







@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        OrderModule,
        FormsModule
  
        
        ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        CalcComponent,
        HighlighterDirective,
        PortfolioComponent,
        PieChartComponent,
        SumPipe,
        TestportComponent,
        BalancesComponent,
        DepositComponent,
        WithdrawalsComponent,
       
 
       
     
    
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PieDataService,
       
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }