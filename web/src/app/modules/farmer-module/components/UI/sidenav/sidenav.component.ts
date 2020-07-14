import { Component, OnInit, Input } from "@angular/core";
import { UserProfile } from "src/app/common/_models/user";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  @Input() profile: UserProfile;
  constructor() {}

  ngOnInit(): void {}
}
