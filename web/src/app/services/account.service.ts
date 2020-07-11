import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable, timer } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private authUrl = "http://localhost:5000/api/v1/farmermarket/auth";
  private farmerUrl = "http://localhost:5000/api/v1/farmermarket/farmers";

  constructor(private http: HttpClient) {}

  createAccount(data: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.authUrl}/users`, { ...data, role: "farmer" }); // the default role for using the web is farmer
  }

  checkEmail(email: string) {
    // check if email exist or not

    return this.http.get(`${this.authUrl}/users/${email}`);
  }
}
