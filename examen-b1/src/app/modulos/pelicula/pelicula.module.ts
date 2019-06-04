import { PeliculaService } from '../../service/pelicula.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListarComponent } from './pelicula-listar/pelicula-listar.component';
import { PeliculaCrearComponent } from './pelicula-crear/pelicula-crear.component';
import {PeliculaRoutingModule} from "./pelicula-routing.module";
import { TableModule } from 'primeng/table';
import {MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PeliculaListarComponent,
    PeliculaCrearComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    TableModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    PeliculaService
  ]
})
export class PeliculaModule { }
