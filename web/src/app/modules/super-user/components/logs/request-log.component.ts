import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { SuperUserService } from "src/app/common/services/super-user.service";
import { MatDialog } from "@angular/material/dialog";
import { RequestLogs } from "src/app/common/_models/superUser";
import { MatTableDataSource } from "@angular/material/table";
import { ApiResponse } from "src/app/common/_models/products";

@Component({
  selector: "super-request-log",
  templateUrl: "./request-log.component.html",
  styleUrls: ["./request-log.component.css"],
})
export class RequestLogComponent implements OnInit {
  REQUEST_LOG: RequestLogs[];
  dataSource = new MatTableDataSource<RequestLogs>(this.REQUEST_LOG);
  displayedColumns: string[] = [
    "url",
    "method",
    "response_time",
    "request_date",
  ];
  constructor(
    private superService: SuperUserService,
    public dialog: MatDialog
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    this.superService.getRequestLogs().subscribe(
      (res: ApiResponse) => {
        this.REQUEST_LOG = res.data;
        this.dataSource = new MatTableDataSource<RequestLogs>(this.REQUEST_LOG);

        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
