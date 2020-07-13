import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  ngOnInit(): void {}
}
