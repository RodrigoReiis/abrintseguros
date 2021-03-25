import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'quemsomos', loadChildren: () => import('./institucional/quemsomos/quemsomos.module').then(m => m.QuemsomosModule)},
    { path: 'duvidas', loadChildren: () => import('./institucional/duvidas/duvidas.module').then(m => m.DuvidasModule)},
    { path: 'seguros', loadChildren: () => import('./seguros/seguros.module').then(m => m.SegurosModule)},
    { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
