import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { TakepollComponent } from './takepoll/takepoll.component';
import { AllpollsComponent } from './allpolls/allpolls.component';
import { MypollsComponent } from './mypolls/mypolls.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'dashboard/:id/createPoll', component: CreatepollComponent },
  { path: 'dashboard/:id/takePoll', component: TakepollComponent },
  { path: 'dashboard/:id/allPolls', component: AllpollsComponent },
  { path: 'dashboard/:id/myPolls', component: MypollsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
