import { PeliculaService } from '../../../service/pelicula.service';
import { PeliculaInterface } from '../../../interfaces/pelicula.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-pelicula-listar',
  templateUrl: './pelicula-listar.component.html',
  styleUrls: ['./pelicula-listar.component.css']
})
export class PeliculaListarComponent implements OnInit {
  peliculas: PeliculaInterface[] = []

  constructor(
    private readonly _peliculaService: PeliculaService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(parametros=>{
      const peliculaTemporal: PeliculaInterface = {
        nombre: 'Inception',
        anioLanzamiento: 2012,
        rating: 5,
        actoresPrincipales:'Leo DiCaprio',
        actorId: parametros.id
      }

      this._peliculaService.crear(peliculaTemporal)
      this.peliculas = this._peliculaService.obtenerTodos(parametros.id);
    })
  }
}
