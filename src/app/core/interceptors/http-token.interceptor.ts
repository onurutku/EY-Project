import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import Swal from 'sweetalert2';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  userLoggedIn!: User;
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.auth.userLoggedIn.subscribe((userLoggedIn: any) => {
      this.userLoggedIn = userLoggedIn;
    });
    if (!this.userLoggedIn) {
      return next.handle(request);
    } else {
      const modifiedRequest = request.clone({
        params: new HttpParams().set('auth', this.userLoggedIn._token),
      });
      return next.handle(modifiedRequest).pipe(
        catchError((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.message,
            showConfirmButton: false,
            timer: 3000,
          });
          return throwError(error);
        })
      );
    }
  }
}
