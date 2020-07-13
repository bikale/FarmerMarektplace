import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./commons/components/auth/login.component";
import { SignupComponent } from "./commons/components/auth/signup.component";
import { AccessGuard } from "./commons/guards/access.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./farmerdashboard/farmerdashboard.module").then(
        (module) => module.FarmerdashboardModule
      ),
    canActivate: [AccessGuard],
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
