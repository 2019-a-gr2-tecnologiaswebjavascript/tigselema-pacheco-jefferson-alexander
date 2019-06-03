import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListarComponent } from './pelicula-listar/pelicula-listar.component';
import { PeliculaCrearComponent } from './pelicula-crear/pelicula-crear.component';

@NgModule({
  declarations: [PeliculaListarComponent, PeliculaCrearComponent],
  imports: [
    CommonModule
  ]
})
export class PeliculaModule { }
