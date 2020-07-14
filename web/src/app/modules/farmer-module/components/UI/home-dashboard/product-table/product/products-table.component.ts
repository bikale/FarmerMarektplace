import { Component, OnInit } from "@angular/core";
import { PeriodicElement } from "src/app/common/_models/products";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
  styleUrls: ["./products-table.component.css"],
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "addproduct",
  ];
  dataSource = ELEMENT_DATA;
  sortedData: PeriodicElement[];
  constructor() {
    this.sortedData = this.dataSource.slice();
  }

  ngOnInit(): void {}
  addProduct() {}

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "position":
          return compare(a.position, b.position, isAsc);
        case "name":
          return compare(a.name, b.name, isAsc);
        case "weight":
          return compare(a.weight, b.weight, isAsc);
        case "symbol":
          return compare(a.symbol, b.symbol, isAsc);

        default:
          return 0;
      }
    });
  }
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  // { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  // { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  // { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  // { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  // { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  // { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
  // { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
  // { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
  // { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
  // { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
  // { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
  // { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
  // { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
  // { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
  // { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" },
];
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
