import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable, timer, BehaviorSubject } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";

import { User, Registrationform } from "../_models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // The RxJS BehaviorSubject is a special type of Subject that keeps hold of the current value and emits
  // it to any new subscribers as soon as they subscribe, while regular Subjects
  // don't store the current value and only emit values that are published after a subscription is created.
  private currentUserSubject: BehaviorSubject<User>;

  private authUrl = "http://localhost:5000/api/v1/farmermarket/auth";
  private farmerUrl = "http://localhost:5000/api/v1/farmermarket/farmers";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("accesstoken"))
    );
  }

  createAccount(data: Registrationform): Observable<any> {
    return this.http.post(`${this.authUrl}/users`, { ...data, role: "farmer" }); // the default role for using the web is farmer
  }
  checkEmail(email: string) {
    // check if email exist or not
    return this.http.get(`${this.authUrl}/users/${email}`);
  }

  // The currentUserValue getter allows other components an easy way to get the value of the currently logged in user without having to subscribe to the currentUser Observable.
  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
  //The logout() method removes the current user object from local storage and publishes null to the currentUserSubject to notify all subscribers that the user has logged out.
}
