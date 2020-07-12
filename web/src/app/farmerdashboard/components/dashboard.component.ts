import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  ngOnInit(): void {}
}
