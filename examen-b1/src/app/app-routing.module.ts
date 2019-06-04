import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {NoEncontradaComponent} from "./componentes/no-encontrada/no-encontrada.component";
import {MenuComponent} from "./componentes/menu/menu.component";
import {ExisteCajeroGuard} from "./guards/existe-cajero.guard";

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [ExisteCajeroGuard]
  },
  {
    path: 'actor',
    loadChildren: './modulos/actor/actor.module#ActorModule',
    canActivate: [ExisteCajeroGuard]
  },
  {
    path: 'comprar',
    loadChildren: './modulos/compra/compra.module#CompraModule',
    canActivate: [ExisteCajeroGuard]
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
