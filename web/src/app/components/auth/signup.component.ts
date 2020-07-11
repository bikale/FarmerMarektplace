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
import {
  Observable,
  pipe,
  Subject,
  of,
  from,
  fromEvent,
  observable,
  timer,
} from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  delay,
  flatMap,
} from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  hide = true;
  sign_up_form;
  private searchUpdated = new Subject();
  constructor(
    formbuilder: FormBuilder,
    private accountService: AuthService,
    private http: HttpClient
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
  ngOnInit(): void {}

  onsignUp() {
    this.accountService
      .createAccount(this.sign_up_form.value)
      .subscribe((data) => {
        console.log(data);
      });
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
          return this.accountService.checkEmail(emailcontrol.value).pipe(
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
