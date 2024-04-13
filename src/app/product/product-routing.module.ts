import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', pathMatch: 'full', component: ProductListComponent },
      {
        path: 'add',
        canActivate: [AuthActivate],
        component: AddProductComponent,
      },
      { path: ':productId', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
