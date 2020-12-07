import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SuperUserService {
  private superUrl =
    "https://farmer-market.herokuapp.com/api/v1/farmermarket/super";
  constructor(private http: HttpClient) {}

  getUserAccount() {
    return this.http.get(`${this.superUrl}/users`);
  }

  changeUserStatus(id: string, status: boolean) {
    return this.http.patch(`${this.superUrl}/users/${id}`, { status });
  }

  getRequestLogs() {
    return this.http.get(`${this.superUrl}/logs`);
  }
  getOrderTransactions() {
    return this.http.get(`${this.superUrl}/transactions`);
  }
}
