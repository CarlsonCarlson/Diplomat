import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { User1Component } from './user1/user1.component';
import { MediatorComponent } from './mediator/mediator.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDiplomatMiniFormComponent } from './user-diplomat-mini-form/user-diplomat-mini-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    Form1Component,
    Form2Component,
    User1Component,
    MediatorComponent,
    UserDashboardComponent,
    UserDiplomatMiniFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'form1', component: Form1Component},
      { path: 'form2', component: Form2Component},
      { path: 'user-dashboard', component: UserDashboardComponent},
      { path: 'mediator', component: MediatorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
