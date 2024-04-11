import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeroComponent, FeaturedProductsComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
