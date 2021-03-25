import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', component: SegurosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SegurosRoutingModule { }
