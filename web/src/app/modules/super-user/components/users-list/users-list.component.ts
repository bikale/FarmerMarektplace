import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { SuperUserService } from "src/app/common/services/super-user.service";
import { UsersList } from "../../../../common/_models/user";
import { ApiResponse } from "src/app/common/_models/products";
import { MatDialog } from "@angular/material/dialog";
import { UserEditDialogComponent } from "./user-edit-dialog/user-edit-dialog.component";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "super-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  USERS_LIST_DATA: UsersList[];
  dataSource = new MatTableDataSource<UsersList>(this.USERS_LIST_DATA);
  constructor(
    private superService: SuperUserService,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    "firstname",
    "lastname",
    "email",
    "role",
    "status",
    "changestatus",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.superService.getUserAccount().subscribe(
      (res: ApiResponse) => {
        this.USERS_LIST_DATA = res.data;
        this.dataSource = new MatTableDataSource<UsersList>(
          this.USERS_LIST_DATA
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
  openUserEditDialog(userData) {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      data: userData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != "close") {
        this.USERS_LIST_DATA = this.USERS_LIST_DATA.map((item) => {
          if (item["_id"] == userData._id) {
            return { ...item, active: result };
          }
          return item;
        });

        this.dataSource = new MatTableDataSource<UsersList>(
          this.USERS_LIST_DATA
        );
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    });
  }
}
