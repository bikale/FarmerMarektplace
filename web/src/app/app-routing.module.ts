import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./common/components/auth/login.component";
import { SignupComponent } from "./common/components/auth/signup.component";
import { AccessGuard } from "./common/guards/access.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/farmer-module/farmerdashboard.module").then(
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
