import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemsomosComponent } from './quemsomos.component';
import { QuemsomosRoutingModule } from './quemsomos-routing.module';



@NgModule({
  declarations: [QuemsomosComponent],
  imports: [
    CommonModule,
    QuemsomosRoutingModule
  ]
})
export class QuemsomosModule { }
