import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/common/services/auth.service";

@Component({
  selector: "app-forgetpassworddialog",
  templateUrl: "./forgetpassworddialog.component.html",
  styleUrls: ["./forgetpassworddialog.component.css"],
})
export class ForgetpassworddialogComponent implements OnInit {
  message: string = null;
  error: string = null;

  forgetEmailControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onForgetPassword() {
    this.message = null;
    this.error = null;
    this.authService.forgetPassword(this.forgetEmailControl.value).subscribe(
      (data) => {
        this.message = "Email Sent Check your email please";
      },
      (error) => {
        this.error = "There is no account with this email";
      }
    );
  }
}
