import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard.component";
import { RouterModule } from "@angular/router";

import { HomeDashboardComponent } from "./components/UI/home-dashboard/home-dashboard.component";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { OrderTableComponent } from "./components/UI/home-dashboard/orders/order-table.component";
import { SidenavComponent } from "./components/UI/sidenav/sidenav.component";
import { ProductsTableComponent } from "./components/UI/home-dashboard/product/product-table/products-table.component";
import { AddProductDialogComponent } from "./components/UI/home-dashboard/product/add-product-dialog/add-product-dialog.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProductsListComponent } from "./components/UI/products/products-list.component";
import { OrderListComponent } from "./components/UI/orders/order-list.component";
import { DetailComponent } from "./components/UI/orders/order-detail/detail.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeDashboardComponent,
    OrderTableComponent,
    SidenavComponent,
    ProductsTableComponent,
    AddProductDialogComponent,
    ProductsListComponent,
    OrderListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
        children: [
          { path: "", component: HomeDashboardComponent },
          { path: "orders", component: OrderListComponent },
          { path: "products", component: ProductsListComponent },
        ],
      },
    ]),
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DashboardComponent, HomeDashboardComponent],
})
export class FarmerdashboardModule {}
