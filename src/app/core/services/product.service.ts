import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  get<T>(endpoint: string | number): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl + endpoint}`);
  }
  post<T>(endpoint: string | number, body: any): Observable<T> {
    return this.http.post<T>(`${environment.baseUrl + endpoint}`, body);
  }
  put<T>(endpoint: string | number, body: any): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl + endpoint}`, body);
  }
  delete<T>(endpoint: string | number): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl + endpoint}`);
  }
}
