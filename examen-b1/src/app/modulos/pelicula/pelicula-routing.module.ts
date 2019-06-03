import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PeliculaListarComponent} from "./pelicula-listar/pelicula-listar.component";
import {PeliculaCrearComponent} from "./pelicula-crear/pelicula-crear.component";

const routes: Routes= [
  {
    path: 'listar',
    component: PeliculaListarComponent
  },
  {
    path:'crear',
    component: PeliculaCrearComponent
  }
]
@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class PeliculaRoutingModule{}
