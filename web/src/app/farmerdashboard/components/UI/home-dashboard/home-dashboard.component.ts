import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-home-dashboard",
  templateUrl: "./home-dashboard.component.html",
  styleUrls: ["./home-dashboard.component.css"],
})
export class HomeDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "New Orders", classname: "new-orders", cols: 4, rows: 1 }, //classname css reference
          { title: "Card 2", classname: "total-earnings", cols: 4, rows: 1 },
          { title: "Card 3", classname: "total-orders", cols: 4, rows: 1 },
          { title: "Card 4", classname: "returns", cols: 4, rows: 1 },
          { title: "Card 5", classname: "new-orders", cols: 4, rows: 1 },
          { title: "Card 6", classname: "new-orders", cols: 4, rows: 1 },
          { title: "Card 7", classname: "new-orders", cols: 4, rows: 1 },
        ];
      }

      return [
        { title: "Card 1", classname: "new-orders", cols: 1, rows: 1 }, //classname css reference
        { title: "Card 2", classname: "total-earnings", cols: 1, rows: 1 },
        { title: "Card 3", classname: "total-orders", cols: 1, rows: 1 },
        { title: "Card 4", classname: "returns", cols: 1, rows: 1 },
        { title: "Card 5", classname: "", cols: 3, rows: 3 },
        { title: "Card 6", classname: "", cols: 1, rows: 3 },
        { title: "Card 7", classname: "", cols: 4, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
