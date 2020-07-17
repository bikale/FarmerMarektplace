import { Component, OnInit } from "@angular/core";
import {
  PeriodicElement,
  Product,
  ApiResponse,
} from "src/app/common/_models/products";
import { Sort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { AddProductDialogComponent } from "../add-product-dialog/add-product-dialog.component";
import { FarmerService } from "src/app/common/services/farmer.service";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
  styleUrls: ["./products-table.component.css"],
})
export class ProductsTableComponent {
  displayedColumns: string[] = [
    "photo",
    "name",
    "price",
    "quantity",
    "addproduct",
  ];
  dataSource;
  sortedData: Product[];
  constructor(public dialog: MatDialog, private farmerService: FarmerService) {
    // this.sortedData = this.dataSource.slice();
  }

  ngOnInit(): void {
    this.farmerService.getProducts().subscribe(
      (res: ApiResponse) => {
        this.dataSource = res.data;
        this.sortedData = this.dataSource.slice(0, 5);
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProductDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return compare(a.name, b.name, isAsc);
        case "price":
          return compare(a.price, b.price, isAsc);
        case "quantity":
          return compare(a.quantity, b.quantity, isAsc);

        default:
          return 0;
      }
    });
  }
}
const ELEMENT_DATA: Product[] = [];
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
