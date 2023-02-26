import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeyoutRoutingModule } from './leyout-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LeyoutRoutingModule,

    
  ]
})
export class LeyoutModule { }
