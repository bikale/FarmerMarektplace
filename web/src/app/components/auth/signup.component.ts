import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  hide = true;
  sign_up_form;
  constructor(formbuilder: FormBuilder) {
    this.sign_up_form = formbuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
          this.emailExistValidator,
        ]),
      ],
      createpassword: ["", Validators.required],
      confirmpassword: [
        "",
        [Validators.required, this.confirmPasswordValidator],
      ],
    });
  }
  ngOnInit(): void {}
  onsignUp() {
    console.log(this.sign_up_form.value);
  }

  confirmPasswordValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (control.value === this.sign_up_form?.value.createpassword) {
      return null;
    }
    return { invalid: true };
  };
  emailExistValidator(control: FormControl): Promise<any> | Observable<any> {
    return null;
  }
}
