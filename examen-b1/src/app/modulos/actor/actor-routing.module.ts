import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActorListarComponent} from './actor-listar/actor-listar.component';
import {ActorCrearComponent} from './actor-crear/actor-crear.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ActorListarComponent
  },
  {
    path: 'crear',
    component: ActorCrearComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActorRoutingModule {}
