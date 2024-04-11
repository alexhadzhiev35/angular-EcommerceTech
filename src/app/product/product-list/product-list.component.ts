import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] | null = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      for (const [key, value] of Object.entries(products)) {
        const product: Product = {
          id: key,
          brand: value.brand,
          category: value.category,
          imageUrl1: value.imageUrl1,
          imageUrl2: value.imageUrl2,
          imageUrl3: value.imageUrl3,
          imageUrl4: value.imageUrl4,
          isFeatured: value.isFeatured,
          model: value.model,
          price: value.price,
          rating: value.rating,
          specifications: value.specifications,
          description: value.description,
          options: value.options,
        };

        this.products?.push(product);
      }
    });

    console.log(this.products);
  }
}
