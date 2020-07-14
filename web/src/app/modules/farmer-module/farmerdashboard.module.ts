import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard.component";
import { RouterModule } from "@angular/router";

import { HomeDashboardComponent } from "./components/UI/home-dashboard/home-dashboard.component";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { OrderTableComponent } from "./components/UI/home-dashboard/product-table/orders/order-table.component";
import { SidenavComponent } from "./components/UI/sidenav/sidenav.component";
import { ProductsTableComponent } from "./components/UI/home-dashboard/product-table/product/products-table.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeDashboardComponent,
    OrderTableComponent,
    SidenavComponent,
    ProductsTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
        children: [{ path: "", component: HomeDashboardComponent }],
      },
    ]),
    AngularMaterialModule,
  ],
  exports: [DashboardComponent, HomeDashboardComponent],
})
export class FarmerdashboardModule {}
