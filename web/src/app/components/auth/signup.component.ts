import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }
  ngOnInit(): void {}
  onsignUp() {
    console.log(this.sign_up_form.value);
  }
}
