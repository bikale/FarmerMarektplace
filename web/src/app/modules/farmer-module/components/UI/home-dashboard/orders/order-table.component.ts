import { Component, OnInit, ViewChild } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { Sort } from "@angular/material/sort";
import { Orders, ApiResponse } from "src/app/common/_models/products";
import { DetailComponent } from "../../orders/order-detail/detail.component";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { FarmerService } from "src/app/common/services/farmer.service";
import { first } from "rxjs/operators";

@Component({
  selector: "orders-table",
  templateUrl: "./order-table.component.html",
  styleUrls: ["./order-table.component.css"],
})
export class OrderTableComponent implements OnInit {
  displayedColumns: string[] = [
    "order_number",
    "status",
    "quantity",
    "totalprice",
    "detailaction",
  ];

  dataSource = [];
  sortedData: MatTableDataSource<Orders>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private farmerService: FarmerService) {
    this.sortedData = new MatTableDataSource(this.dataSource);
  }
  ngOnInit() {
    this.farmerService
      .getOrders()
      .pipe(first()) //pipe(first()) automatically unsubscribes from the observable after returning the first item
      .subscribe(
        (data: ApiResponse) => {
          console.log(data);
          this.dataSource = data.data;
          this.sortedData = new MatTableDataSource(this.dataSource);
          this.sortedData.paginator = this.paginator;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = new MatTableDataSource(data);
      return;
    }

    const sorteddata = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "order_number":
          return compare(a._id, b._id, isAsc);
        case "totalprice":
          return compare(a.products.totalprice, b.products.totalprice, isAsc);
        case "quantity":
          return compare(a.products.quantity, b.products.quantity, isAsc);
        case "status":
          return compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    });
    this.sortedData = new MatTableDataSource(sorteddata);
    this.sortedData.paginator = this.paginator;
  }

  openOrderDetailDialog(order) {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: order,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != "close") {
        this.dataSource = this.dataSource.map((item) => {
          if (item["_id"] == order._id) {
            return { ...item, status: result };
          }
          return item;
        });

        this.sortedData = new MatTableDataSource(this.dataSource);
        if (this.sortedData.paginator) {
          this.sortedData.paginator.firstPage();
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const filteredData = this.dataSource.filter((data) =>
      data.status.toLowerCase().includes(filterValue.toLowerCase())
    );

    this.sortedData = new MatTableDataSource(filteredData);
    this.sortedData.paginator = this.paginator;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
