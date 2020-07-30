import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./common/components/auth/login.component";
import { SignupComponent } from "./common/components/auth/signup.component";
import { HttpRequestInterceptor } from "./common/interceptors/http.interceptor";
import { ForgetpassworddialogComponent } from './common/components/auth/forgetPassword/forgetpassworddialog.component';
import { ResetpasswordComponent } from './common/components/auth/resetpassword/resetpassword.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, ForgetpassworddialogComponent, ResetpasswordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
