import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable, timer, BehaviorSubject, throwError } from "rxjs";
import { debounceTime, switchMap, map, catchError } from "rxjs/operators";

import {
  User,
  Registrationform,
  LoginCredential,
  ResetPassword,
} from "../_models/user";
import { error } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // The RxJS BehaviorSubject is a special type of Subject that keeps hold of the current value and emits
  // it to any new subscribers as soon as they subscribe, while regular Subjects
  // don't store the current value and only emit values that are published after a subscription is created.
  private currentUserSubject: BehaviorSubject<User>;

  // private authUrl =
  //   "https://farmermarketfinal.uc.r.appspot.com/api/v1/farmermarket/auth";
  // private farmerUrl =
  //   "https://farmermarketfinal.uc.r.appspot.com/api/v1/farmermarket/farmers";
  private authUrl =
    "https://farmer-market.herokuapp.com/api/v1/farmermarket/auth";
  private farmerUrl =
    "https://farmer-market.herokuapp.com/api/v1/farmermarket/farmers";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("accesstoken"))
    );
  }

  createAccount(data: Registrationform): Observable<any> {
    // the default role for using the web is farmer
    return this.http
      .post(`${this.authUrl}/users`, { ...data, role: "farmer" })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage
          localStorage.setItem(
            "accesstoken",
            JSON.stringify({ token: user["token"], role: user["role"] })
          );
          this.currentUserSubject.next({
            token: user["token"],
            role: user["role"],
          }); //notify all subscribers that the user has logged in.
          return user;
        }),
        catchError((err) => {
          // console.log("error caught in service");
          // console.error(err);
          //Handle the error here
          return throwError(err); //Rethrow it back to component
        })
      );
  }
  checkEmail(email: string) {
    // check if email exist or not
    return this.http.get(`${this.authUrl}/users/${email}`);
  }

  // The currentUserValue getter allows other components an easy way to get the value of the currently logged in user without having to subscribe to the currentUser Observable.
  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginCredential: LoginCredential) {
    return this.http.post(`${this.authUrl}/login`, loginCredential).pipe(
      map((user) => {
        // store user details and jwt token in local storage
        localStorage.setItem(
          "accesstoken",
          JSON.stringify({ token: user["token"], role: user["role"] })
        );
        this.currentUserSubject.next({
          token: user["token"],
          role: user["role"],
        }); //notify all subscribers that the user has logged in.
        return user;
      }),
      catchError((err) => {
        // console.log("error caught in service");
        // console.error(err);
        //Handle the error here
        return throwError(err); //Rethrow it back to component
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("accesstoken");
    this.currentUserSubject.next({ token: null, role: null });
  }
  //The logout() method removes the current user object from local storage and publishes null to the currentUserSubject to notify all subscribers that the user has logged out.

  //get user profile -name pictures
  getMe() {
    return this.http.get(`${this.authUrl}/me`);
  }

  forgetPassword(email: string) {
    return this.http.patch(`${this.authUrl}/forgotpassword`, { email });
  }
  resetPassword({ email, password, resettoken }: ResetPassword) {
    return this.http
      .patch(`${this.authUrl}/resetpassword/${resettoken}`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage
          localStorage.setItem(
            "accesstoken",
            JSON.stringify({ token: user["token"], role: user["role"] })
          );
          this.currentUserSubject.next({
            token: user["token"],
            role: user["role"],
          }); //notify all subscribers that the user has logged in.
          return user;
        }),
        catchError((err) => {
          // console.log("error caught in service");
          // console.error(err);
          //Handle the error here
          return throwError(err); //Rethrow it back to component
        })
      );
  }
}
