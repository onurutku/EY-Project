import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/shared/models/role.model';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.userLoggedIn.value?.authority == Role.ADMIN) {
      return true;
    } else {
      this.router.navigate(['products/list']);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You do not have permission to navigate admin page',
      });
      return false;
    }
  }
}
