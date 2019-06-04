import { Component, OnInit } from '@angular/core';
import {PeliculaInterface} from "../../../interfaces/pelicula.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PeliculaService} from "../../../service/pelicula.service";

@Component({
  selector: 'app-pelicula-crear',
  templateUrl: './pelicula-crear.component.html',
  styleUrls: ['./pelicula-crear.component.css']
})
export class PeliculaCrearComponent implements OnInit {

  pelicula: PeliculaInterface = {}
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _peliculaService: PeliculaService
  ) { }

  ngOnInit() {

  }

  crearPelicula(){
    this._activatedRoute.params.subscribe(parametros=>{
      this.pelicula.actorId = parametros.id
      this._peliculaService.crear(this.pelicula)
      this._router.navigate(['/actor',parametros.id,'pelicula','listar'])
    })
  }

  irAdministrarHijos(){
    this._activatedRoute.params.subscribe(parametros=>{
      this._router.navigate(['/actor',parametros.id,'pelicula','listar'])
    })
  }

}
