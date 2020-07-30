import { Component, OnInit } from "@angular/core";
import { first, flatMap } from "rxjs/operators";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "src/app/common/services/auth.service";
import { of } from "rxjs";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.component.html",
  styleUrls: ["./resetpassword.component.css"],
})
export class ResetpasswordComponent implements OnInit {
  hide = true;
  reset_password_form;
  error;
  loading;
  resetToken: string;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.reset_password_form = formbuilder.group({
      password: ["", Validators.required],
      confirmpassword: [
        "",
        [Validators.required, this.confirmPasswordValidator],
      ],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.resetToken = params.get("resettoken");
    });
  }

  onResetPassword() {
    console.log(this.reset_password_form.value, this.resetToken);
    this.authService
      .resetPassword({
        ...this.reset_password_form.value,
        resettoken: this.resetToken,
      })
      .pipe(first()) //pipe(first()) automatically unsubscribes from the observable after returning the first item
      .subscribe(
        (data) => {
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log(error.error);
          this.error = "Invalid Token";
          this.loading = false;
        }
      );
  }

  confirmPasswordValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (control.value === this.reset_password_form?.value.password) {
      return null;
    }
    return { invalid: true };
  };
}
