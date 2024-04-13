import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    FeaturedProductsComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
  exports: [FeaturedProductsComponent],
})
export class ProductModule {}
