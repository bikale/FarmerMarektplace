import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/auth/login.component";
import { SignupComponent } from "./components/auth/signup.component";
import { AccessGuard } from "./guards/access.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "",
    loadChildren: () =>
      import("./farmerdashboard/farmerdashboard.module").then(
        (module) => module.FarmerdashboardModule
      ),
    canActivate: [AccessGuard],
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
