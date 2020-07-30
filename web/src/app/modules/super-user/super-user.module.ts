import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SuperSidenavComponent } from "./sidenav/supersidenav.component";
import { SuperDashboardComponent } from "./super-dashboard/super-dashboard.component";
import { SuperUserRootComponent } from "./components/super-user-root/super-user-root.component";
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserEditDialogComponent } from './components/users-list/user-edit-dialog/user-edit-dialog.component';
import { RequestLogComponent } from './components/logs/request-log.component';
import { TransactionsComponent } from './components/Transactions/transactions.component';

@NgModule({
  declarations: [
    SuperDashboardComponent,
    SuperSidenavComponent,
    SuperUserRootComponent,
    UsersListComponent,
    UserEditDialogComponent,
    RequestLogComponent,
    TransactionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: SuperDashboardComponent,
        children: [{ path: "", component: SuperUserRootComponent }],
      },
    ]),
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [SuperDashboardComponent],
})
export class SuperUserModule {}
