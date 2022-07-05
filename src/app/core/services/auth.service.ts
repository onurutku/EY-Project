import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient) {}
  login(userLoggedIn: any) {
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map((data: any) => {
        const newData: User[] = [];
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            if (
              data[key].email === userLoggedIn.email &&
              data[key].password === userLoggedIn.password
            ) {
              const _token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
              const _expirationDate = +new Date() + 600000;
              const response: User = {
                id: data[key].id,
                email: userLoggedIn.email,
                password: userLoggedIn.password,
                _token: _token,
                _expirationDate: _expirationDate,
              };
              const responseForInterceptor = {
                email: response.email,
                _token: response._token,
                _expirationDate: response._expirationDate,
              };
              newData.push(response);
              localStorage.setItem(
                'user',
                JSON.stringify(responseForInterceptor)
              );
              this.userLoggedIn.next(responseForInterceptor);
            } else {
              throw new Error();
            }
          }
        }
        return newData;
      })
    );
  }
  logout() {
    this.userLoggedIn.next(null);
    localStorage.removeItem('user');
  }
  autoLogin() {
    const fromLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    if (fromLocalStorage) {
      const userAutoLoggedIn = {
        email: fromLocalStorage.email,
        _token: fromLocalStorage._token,
        _expirationDate: +new Date() + 600000,
      };
      this.userLoggedIn.next(userAutoLoggedIn);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(userAutoLoggedIn));
    }
  }
}
