import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroments/enviroment';
import { Product } from './types/product';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const { apiUrl } = environment;
    return this.http.get<Product[]>(`${apiUrl}/products.json`);
  }

  // getUser() {
  //   const { apiUrl } = environment;
  //   return this.h;
  // }

  getUsers() {
    const { apiUrl } = environment;
    return this.http.get<User[]>(`${apiUrl}/users.json`);
  }

  addUser(user: User) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users.json`, user);
  }

  updateUser(user: User, userId: string) {
    const { apiUrl } = environment;
    return this.http.patch<User>(`${apiUrl}/users/${userId}.json`, user);
  }
}
