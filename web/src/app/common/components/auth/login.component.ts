import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform;
  loading;
  error;
  constructor(
    formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginform = formbuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }
  ngOnInit(): void {}
  onLogin() {
    // stop here if form is invalid
    if (this.loginform.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .login(this.loginform.value)
      .pipe(first()) //pipe(first()) automatically unsubscribes from the observable after returning the first item
      .subscribe(
        (data) => {
          if (data["role"] == "super") {
            this.router.navigate(["super"]);
          } else {
            this.router.navigate(["/"]);
          }
        },
        (error) => {
          console.log(error.error);
          this.error = error;
          this.loading = false;
        }
      );
  }
}
