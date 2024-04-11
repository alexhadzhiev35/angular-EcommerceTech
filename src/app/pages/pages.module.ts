import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, AboutComponent, ContactComponent],
})
export class PagesModule {}