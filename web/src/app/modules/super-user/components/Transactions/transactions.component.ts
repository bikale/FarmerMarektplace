import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { SuperUserService } from "src/app/common/services/super-user.service";
import { UsersList } from "../../../../common/_models/user";
import { ApiResponse } from "src/app/common/_models/products";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { OrderTransactions } from "src/app/common/_models/superUser";
@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements OnInit {
  Transaction_LIST_DATA: OrderTransactions[];
  dataSource = new MatTableDataSource<OrderTransactions>(
    this.Transaction_LIST_DATA
  );
  constructor(
    private superService: SuperUserService,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    "order_number",
    "quantity",
    "totalprice",
    "status",
    "date",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.superService.getOrderTransactions().subscribe(
      (res: ApiResponse) => {
        this.Transaction_LIST_DATA = res.data;
        this.dataSource = new MatTableDataSource<OrderTransactions>(
          this.Transaction_LIST_DATA
        );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // console.log(this.USERS_LIST_DATA);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
