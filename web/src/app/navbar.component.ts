import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar color="primary" class="toolbar-header">
      <mat-toolbar-row>
        <span>Third Line</span>
        <span class="toolbar-spacer"></span>
        <mat-icon
          class="toolbar-icon"
          aria-hidden="false"
          aria-label="Example heart icon"
          >login</mat-icon
        >
        <mat-icon
          class="toolbar-icon"
          aria-hidden="false"
          aria-label="Example delete icon"
          >delete</mat-icon
        >
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    `
      .toolbar-icon {
        padding: 0 20px;
      }

      .toolbar-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
