import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";

@Component({
  selector: "app-super-user-root",
  templateUrl: "./super-user-root.component.html",
  styleUrls: ["./super-user-root.component.css"],
})
export class SuperUserRootComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // bg_icon_name mat icon names    //classname css reference
          {
            title: "Users",
            cols: 4,
            rows: 3,
          },
          {
            title: "Transactions",
            cols: 4,
            rows: 3,
          },
          {
            title: "Requests Log",
            cols: 4,
            rows: 3,
          },
        ];
      }

      return [
        {
          title: "Users",
          cols: 2,
          rows: 3,
        },
        {
          title: "Transactions",
          cols: 2,
          rows: 3,
        },
        {
          title: "Requests Log",
          cols: 4,
          rows: 3,
        },
      ];
    })
  );
}
