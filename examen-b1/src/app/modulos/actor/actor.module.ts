import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorCrearComponent } from './actor-crear/actor-crear.component';
import { ActorListarComponent } from './actor-listar/actor-listar.component';

@NgModule({
  declarations: [ActorCrearComponent, ActorListarComponent],
  imports: [
    CommonModule
  ]
})
export class ActorModule { }
