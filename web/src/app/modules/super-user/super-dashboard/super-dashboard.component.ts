import { Component, OnInit } from "@angular/core";
import { UserProfile } from "src/app/common/_models/user";
import { AuthService } from "src/app/common/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-super-dashboard",
  templateUrl: "./super-dashboard.component.html",
  styleUrls: ["./super-dashboard.component.css"],
})
export class SuperDashboardComponent implements OnInit {
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
