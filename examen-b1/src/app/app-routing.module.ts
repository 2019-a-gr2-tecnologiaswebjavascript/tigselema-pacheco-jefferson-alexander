import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {NoEncontradaComponent} from "./componentes/no-encontrada/no-encontrada.component";
import {MenuComponent} from "./componentes/menu/menu.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
