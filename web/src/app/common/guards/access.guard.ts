import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AccessGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser = this.authService.currentUserValue();
    console.log(currentUser);
    if (currentUser && currentUser.role == "farmer") {
      // logged in so return true
      return true;
    } else if (currentUser && currentUser.role == "super") {
      //if the user is logged in but the role is super redirect him to super
      this.router.navigate(["/super"]);
    } else {
      // not logged in so redirect to login page with the return url => to return back
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
