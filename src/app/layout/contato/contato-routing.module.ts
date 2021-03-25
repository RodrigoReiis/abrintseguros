import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato.component';




const routes: Routes = [
  {path: '', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContatoRoutingModule { }
