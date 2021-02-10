import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [AboutComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    AboutRoutingModule,
    CommonModule,

  ]
})
export class AboutModule { 
  constructor(){
    console.log("About module");
  }
}
