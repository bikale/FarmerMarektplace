import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Product } from "../_models/products";

@Injectable({
  providedIn: "root",
})
export class FarmerService {
  private farmerUrl =
    "https://farmer-market.herokuapp.com/api/v1/farmermarket/farmers";
  // private farmerUrl = "http://localhost:8080/api/v1/farmermarket/farmers";

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.farmerUrl}/products`).pipe(
      map((products) => {
        return products;
      }),
      catchError((err) => {
        // console.log("error caught in service");
        // console.error(err);
        //Handle the error here
        return throwError(err); //Rethrow it back to component
      })
    );
  }

  addProduct(product) {
    return this.http.post(`${this.farmerUrl}/products`, product);
  }

  getOrders() {
    return this.http.get(`${this.farmerUrl}/orders`).pipe(
      map((orders) => {
        return orders;
      }),
      catchError((err) => {
        // console.log("error caught in service");
        // console.error(err);
        //Handle the error here
        return throwError(err); //Rethrow it back to component
      })
    );
  }
  updateOrders(ordernumber: string, status: string) {
    return this.http
      .patch(`${this.farmerUrl}/orders/${ordernumber}`, { status })
      .pipe(
        map((data) => {
          return data;
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
