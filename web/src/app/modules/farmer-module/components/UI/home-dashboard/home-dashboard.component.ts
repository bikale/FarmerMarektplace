import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-home-dashboard",
  templateUrl: "./home-dashboard.component.html",
  styleUrls: ["./home-dashboard.component.css"],
})
export class HomeDashboardComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // bg_icon_name mat icon names    //classname css reference
          {
            title: "New Orders",
            classname: "new-orders",
            bg_icon_name: "local_shipping",
            cols: 4,
            rows: 1,
          },
          {
            title: "Earnings",
            classname: "total-earnings",
            bg_icon_name: "monetization_on",
            cols: 4,
            rows: 1,
          },
          {
            title: "Orders",
            classname: "total-orders",
            bg_icon_name: "account_balance",
            cols: 4,
            rows: 1,
          },
          {
            title: "Returns",
            classname: "returns",
            bg_icon_name: "backspace",
            cols: 4,
            rows: 1,
          },
          {
            title: "Orders List",
            classname: "",
            bg_icon_name: "local_shipping",
            cols: 4,
            rows: 3,
          },
          {
            title: "Profile",
            classname: "",
            bg_icon_name: "account_circle",
            cols: 4,
            rows: 1,
          },
          {
            title: "Product Inventory",
            classname: "",
            bg_icon_name: "add_shopping_cart",
            cols: 4,
            rows: 3,
          },
        ];
      }

      return [
        {
          title: "New Orders",
          classname: "new-orders",
          bg_icon_name: "local_shipping",
          cols: 1,
          rows: 1,
        }, //classname css reference  // bg_icon_name mat icon names    //classname css reference
        {
          title: "Earnings",
          classname: "total-earnings",
          bg_icon_name: "monetization_on",
          cols: 1,
          rows: 1,
        },
        {
          title: "Orders",
          classname: "total-orders",
          bg_icon_name: "account_balance",
          cols: 1,
          rows: 1,
        },
        {
          title: "Returns",
          classname: "returns",
          bg_icon_name: "backspace",
          cols: 1,
          rows: 1,
        },
        {
          title: "Orders List",
          classname: "",
          bg_icon_name: "local_shipping",
          cols: 3,
          rows: 3,
        },
        {
          title: "Profile",
          classname: "",
          bg_icon_name: "account_circle",
          cols: 1,
          rows: 3,
        },
        {
          title: "Product Inventory",
          classname: "",
          bg_icon_name: "add_shopping_cart",
          cols: 4,
          rows: 3,
        },
      ];
    })
  );
}
