import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { AboutComponent } from './about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{ path: 'about', children:[
  {path:'',component: AboutComponent},
  {path:'aboutus',component:AboutUsComponent}
  ,{path:'contact',component:ContactUsComponent}
],
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
  constructor(){
    console.log("Routing");
    
  }
 }
