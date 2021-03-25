import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuvidasComponent } from './duvidas.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: DuvidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuvidasRoutingModule { }
