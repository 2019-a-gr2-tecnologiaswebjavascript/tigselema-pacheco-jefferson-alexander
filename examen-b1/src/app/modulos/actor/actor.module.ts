import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorCrearComponent } from './actor-crear/actor-crear.component';
import { ActorListarComponent } from './actor-listar/actor-listar.component';
import {ActorRoutingModule} from "./actor-routing.module";
import {TableModule} from "primeng/table";
import {PeliculaModule} from "../pelicula/pelicula.module";
import {ActorService} from "../../service/actor.service";
import {MatCheckboxModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ActorCrearComponent,
    ActorListarComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    TableModule,
    MatInputModule,
    MatCheckboxModule,
    PeliculaModule,
    FormsModule
  ],
  providers: [
    ActorService
  ]
})
export class ActorModule { }
