import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private api: ApiService) {}

  add(product: Product) {
    this.api.addProduct(product).subscribe(console.log);
  }
}
