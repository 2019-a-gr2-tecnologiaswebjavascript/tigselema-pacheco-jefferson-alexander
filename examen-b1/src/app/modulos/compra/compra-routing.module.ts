import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CompraListarComponent} from "./compra-listar/compra-listar.component";
import {CompraCrearComponent} from "./compra-crear/compra-crear.component";

const routes: Routes=[
  {
    path: 'listar',
    component: CompraListarComponent
  },
  {
    path: 'crear',
    component: CompraCrearComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule{}
