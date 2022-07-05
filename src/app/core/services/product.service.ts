import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
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
  patch<T>(endpoint: string | number, body: any): Observable<T> {
    return this.http.patch<T>(`${environment.baseUrl + endpoint}`, body);
  }
  delete<T>(endpoint: string | number): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl + endpoint}`);
  }
}
