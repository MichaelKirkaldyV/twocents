import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { StateService } from './state.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { TakepollComponent } from './takepoll/takepoll.component';
import { AllpollsComponent } from './allpolls/allpolls.component';
import { MypollsComponent } from './mypolls/mypolls.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    CreatepollComponent,
    TakepollComponent,
    AllpollsComponent,
    MypollsComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
