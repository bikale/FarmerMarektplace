import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Orders, ApiResponse } from "src/app/common/_models/products";
import { FormControl, Validators } from "@angular/forms";
import { FarmerService } from "src/app/common/services/farmer.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Orders,
    private farmerService: FarmerService
  ) {}
  orderStatus = [
    { value: "ready", viewValue: "Ready" },
    { value: "complete", viewValue: "Completed" },
  ];
  statusUpdateControl = new FormControl("", Validators.required);
  ngOnInit(): void {}
  updateOrderStatus() {
    this.farmerService
      .updateOrders(this.data._id, this.statusUpdateControl.value)
      .pipe(first()) //pipe(first()) automatically unsubscribes from the observable after returning the first item
      .subscribe(
        (data: ApiResponse) => {
          console.log(data);
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
}
