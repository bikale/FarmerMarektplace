import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  AsyncValidatorFn,
  EmailValidator,
  FormGroup,
} from "@angular/forms";
import { of, timer } from "rxjs";
import { debounceTime, map, flatMap, first } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  hide = true;
  sign_up_form;
  error;
  loading;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.sign_up_form = formbuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required], [this.emailExistValidator]],
      password: ["", Validators.required],
      confirmpassword: [
        "",
        [Validators.required, this.confirmPasswordValidator],
      ],
    });
  }

  get email() {
    return this.sign_up_form.get("email");
  }

  onsignUp() {
    this.authService
      .createAccount(this.sign_up_form.value)
      .pipe(first()) //pipe(first()) automatically unsubscribes from the observable after returning the first item
      .subscribe(
        (data) => {
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log(error.error);
          this.error = error;
          this.loading = false;
        }
      );
  }

  confirmPasswordValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (control.value === this.sign_up_form?.value.password) {
      return null;
    }
    return { invalid: true };
  };

  emailExistValidator = (emailcontrol: AbstractControl) => {
    return timer(1000).pipe(
      flatMap((data) => {
        if (
          !emailcontrol.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$") // check the email pattern
        ) {
          return of({ email: true });
        } else {
          return this.authService.checkEmail(emailcontrol.value).pipe(
            map((res: any) => {
              if (res.success == true) {
                return null;
              } else {
                return { emailexist: true };
              }
            })
          );
        }
      })
    );
  };
}
