import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CommonModule, ProductModule],
  exports: [HomeComponent, AboutComponent, ContactComponent],
})
export class PagesModule {}
