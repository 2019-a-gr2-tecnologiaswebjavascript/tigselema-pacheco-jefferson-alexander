import { Component, OnInit } from '@angular/core';
import {ActorInterface} from "../../../interfaces/actor.interface";
import {ActorService} from "../../../service/actor.service";

@Component({
  selector: 'app-actor-listar',
  templateUrl: './actor-listar.component.html',
  styleUrls: ['./actor-listar.component.css']
})
export class ActorListarComponent implements OnInit {

  actores:ActorInterface[]

  constructor(
    private readonly _actorService: ActorService
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

}
