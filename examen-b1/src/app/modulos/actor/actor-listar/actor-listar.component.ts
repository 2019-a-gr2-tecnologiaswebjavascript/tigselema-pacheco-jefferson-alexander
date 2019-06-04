import { Component, OnInit } from '@angular/core';
import {ActorInterface} from "../../../interfaces/actor.interface";
import {ActorService} from "../../../service/actor.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-listar',
  templateUrl: './actor-listar.component.html',
  styleUrls: ['./actor-listar.component.css']
})
export class ActorListarComponent implements OnInit {

  actores:ActorInterface[]

  constructor(
    private readonly _actorService: ActorService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    const actorTemporal: ActorInterface ={
      idActor: 1,
      nombres: 'Analy',
      apellidos: 'Chinacalle',
      fechaNacimiento: '26/12/1996',
      numeroPeliculas: 15,
      retirado: true
    }
    this._actorService.crear(actorTemporal)
    this.actores= this._actorService.obtenerTodos()
  }

  irCrearActor(){
    this._router.navigate(['/actor','crear'])
  }

  irPeliculasXActor(idActor: number){
    this._router.navigate(['/actor',idActor,'pelicula','listar'])
  }

  eliminarActor(actor: ActorInterface){
    this._actorService.eliminar(actor)
    this.actores= this._actorService.obtenerTodos()
  }


}
