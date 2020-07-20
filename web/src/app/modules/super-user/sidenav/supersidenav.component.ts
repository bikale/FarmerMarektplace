import { Component, OnInit, Input } from "@angular/core";
import { UserProfile } from "src/app/common/_models/user";

@Component({
  selector: "super-sidenav",
  templateUrl: "./supersidenav.component.html",
  styleUrls: ["./supersidenav.component.css"],
})
export class SuperSidenavComponent implements OnInit {
  @Input() profile: UserProfile;
  constructor() {}

  ngOnInit(): void {}
}
