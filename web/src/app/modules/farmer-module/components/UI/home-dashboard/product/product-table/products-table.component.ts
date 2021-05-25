import { Component, OnInit, ViewChild } from "@angular/core";
import {
  PeriodicElement,
  Product,
  ApiResponse,
} from "src/app/common/_models/products";
import { Sort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { AddProductDialogComponent } from "../add-product-dialog/add-product-dialog.component";
import { FarmerService } from "src/app/common/services/farmer.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from "@angular/platform-browser";

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
  sortedData: MatTableDataSource<Product>;
  constructor(
    public dialog: MatDialog,
    private farmerService: FarmerService,
    private sanitizer: DomSanitizer
  ) {
    // this.sortedData = this.dataSource.slice();
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.farmerService.getProducts().subscribe(
      (res: ApiResponse) => {
        this.dataSource = res.data;
        this.sortedData = new MatTableDataSource(this.dataSource);
        this.sortedData.paginator = this.paginator;
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
      this.sortedData = new MatTableDataSource(data);
      return;
    }

    const sorteddata = data.sort((a, b) => {
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
    this.sortedData = new MatTableDataSource(sorteddata);
    this.sortedData.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const filteredData = this.dataSource.filter((data) =>
      data.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    this.sortedData = new MatTableDataSource(filteredData);
    this.sortedData.paginator = this.paginator;
  }

  imageDomeSantizer(imgvalue: string) {
    let imgData = "data:image/*;base64," + imgvalue;

    return this.sanitizer.bypassSecurityTrustUrl(imgData);
  }
}
const ELEMENT_DATA: Product[] = [];
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
