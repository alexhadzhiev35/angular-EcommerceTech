import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NewsletterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, NewsletterComponent],
})
export class CoreModule {}
