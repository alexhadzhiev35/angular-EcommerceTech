import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroments/enviroment';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const { apiUrl } = environment;
    return this.http.get<Product[]>(`${apiUrl}/products.json`);
  }

  getProduct(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Product>(`${apiUrl}/themes/${id}`);
  }
}
