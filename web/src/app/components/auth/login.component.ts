import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform;
  constructor(formbuilder: FormBuilder) {
    this.loginform = formbuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }
  ngOnInit(): void {}
  onLogin() {
    console.log(this.loginform.value);
  }
}
