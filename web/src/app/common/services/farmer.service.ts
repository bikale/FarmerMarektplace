import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Product } from "../_models/products";

@Injectable({
  providedIn: "root",
})
export class FarmerService {
  private farmerUrl = "http://localhost:5000/api/v1/farmermarket/farmers";
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
}
