import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuvidasComponent } from './duvidas.component';
import { DuvidasRoutingModule } from './duvidas-routing.module';



@NgModule({
  declarations: [DuvidasComponent],
  imports: [
    CommonModule,
    DuvidasRoutingModule
  ]
})
export class DuvidasModule { }
