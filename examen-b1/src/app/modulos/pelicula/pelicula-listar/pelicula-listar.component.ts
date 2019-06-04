import { PeliculaService } from '../../../service/pelicula.service';
import { PeliculaInterface } from '../../../interfaces/pelicula.interface';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-pelicula-listar',
  templateUrl: './pelicula-listar.component.html',
  styleUrls: ['./pelicula-listar.component.css']
})
export class PeliculaListarComponent implements OnInit {
  buscar:string;
  peliculas: PeliculaInterface[] = []
  idActor: number

  constructor(
    private readonly _peliculaService: PeliculaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(parametros=>{
      this.idActor=parametros.id
      this.peliculas = this._peliculaService.obtenerTodos(parametros.id);
    })
  }

  eliminarPelicula(pelicula: PeliculaInterface){
    this._peliculaService.eliminar(pelicula)
    this.cargarTodos()
  }

  cargarTodos(){
    this._activatedRoute.params.subscribe(parametros=>{
      this.peliculas = this._peliculaService.obtenerTodos(parametros.id)
    })
  }

  irACrearHijo(){
    this._activatedRoute.params.subscribe(parametros=>{
      this._router.navigate(['/actor',parametros.id,'pelicula','crear'])
    })
  }

  busqueda(){
    this.peliculas = this._peliculaService.busqueda(this.buscar)
  }
}
