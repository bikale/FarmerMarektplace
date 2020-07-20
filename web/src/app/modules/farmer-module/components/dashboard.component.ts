import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/common/services/auth.service";
import { Router } from "@angular/router";
import { UserProfile } from "src/app/common/_models/user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userProfile: UserProfile;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getMe().subscribe(
      (res: any) => {
        this.userProfile = res.data;
      },
      (error) => {
        console.log(error.error);
        this.userProfile = { firstname: "", lastname: "", picture: "url" };
      }
    );
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
