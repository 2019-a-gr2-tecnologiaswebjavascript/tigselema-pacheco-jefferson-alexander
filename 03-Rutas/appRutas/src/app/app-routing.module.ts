import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./rutas/home/home.component";
import {CreditosComponent} from "./rutas/creditos/creditos.component";
import {ProductosComponent} from "./rutas/productos/productos.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {ProductosHogarComponent} from "./rutas/productos-hogar/productos-hogar.component";
import {ProductosVideojuegosComponent} from "./rutas/productos-videojuegos/productos-videojuegos.component";
import {ProductoVideojuegosRpgComponent} from "./rutas/producto-videojuegos-rpg/producto-videojuegos-rpg.component";
import {ProductoVideojuegosPlataformaComponent} from "./rutas/producto-videojuegos-plataforma/producto-videojuegos-plataforma.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'creditos/:id',
    component: CreditosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent,
    children : [
      {
        path: 'hogar',
        component: ProductosHogarComponent
      },
      {
        path: 'videojuegos',
        component: ProductosVideojuegosComponent,
        children: [
          {
            path: 'rpg',
            component: ProductoVideojuegosRpgComponent
          } ,
          {
            path: 'plataforma',
            component: ProductoVideojuegosPlataformaComponent
          },
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
  ,
  {
    path: '**',
    component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
