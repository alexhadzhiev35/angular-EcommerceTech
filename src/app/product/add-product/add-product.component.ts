import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductService, private router: Router) {}

  product = {} as Product;

  add(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.product = {
      id: 'randomId',
      imageUrl1: form.value.imageUrl1,
      imageUrl2: form.value.imageUrl2,
      imageUrl3: form.value.imageUrl3,
      imageUrl4: form.value.imageUrl4,
      category: form.value.category,
      brand: form.value.brand,
      model: form.value.model,
      specifications: JSON.parse(form.value.specifications),
      rating: 5,
      price: Number(form.value.price),
      isFeatured: false,
      description: form.value.description,
      options: JSON.parse(form.value.options),
    };

    this.productService.add(this.product);
    this.router.navigate(['/home']);
  }
}
