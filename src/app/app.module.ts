import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import {DataTableModule} from "angular-6-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutusComponent } from './pages/aboutus.component';
import { RegisterComponent } from './pages/register.component';
import { CarlistComponent } from './pages/carlist.component';
import { Car1Component } from './pages/car1.component';
import { LoginComponent } from './pages/login.component';
import { CarFilterPipe } from './search/car-filter.pipe';
import { SignupsuccessComponent } from './pages/signupsuccess.component';
import { AddcarComponent } from './addcar/addcar.component';
import { UserComponent } from './pages/user.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { UsercarlistingComponent } from './usercarlisting/usercarlisting.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchComponent } from './search/search.component';
import { CaracceptComponent } from './caraccept/caraccept.component';
import { CarrejectComponent } from './carreject/carreject.component';
import { VerifyregisteremailComponent } from './verifyregisteremail/verifyregisteremail.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/carlist', pathMatch: 'full'},
  { path: 'carlist', component: CarlistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'car1/:id', component: Car1Component },
  { path: 'login', component: LoginComponent },
  { path: 'signupsuccess', component: SignupsuccessComponent },
  { path: 'addcar', component: AddcarComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'reset-password/:email', component: ResetPasswordComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'usercarlisting', component: UsercarlistingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'addtocart', component: AddtocartComponent },
  { path: 'caraccept/:reg_id', component: CaracceptComponent },
  { path: 'carreject/:email', component: CarrejectComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'verifyregisteremail/:email', component: VerifyregisteremailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    CarlistComponent,
    Car1Component,
    LoginComponent,
    SignupsuccessComponent,
    AddcarComponent,
    UserComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ConfirmEqualValidatorDirective,
    LogoutComponent,
    UsercarlistingComponent,
    AddtocartComponent,
    CarFilterPipe,
    ResetPasswordComponent,
    SearchComponent,
    CaracceptComponent,
    CarrejectComponent,
    VerifyregisteremailComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ImageuploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule,
    NgxSpinnerModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
