import { Component, OnInit } from '@angular/core';
import {ActorInterface} from "../../../interfaces/actor.interface";
import {ActorService} from "../../../service/actor.service";

@Component({
  selector: 'app-actor-crear',
  templateUrl: './actor-crear.component.html',
  styleUrls: ['./actor-crear.component.css']
})
export class ActorCrearComponent implements OnInit {
  actor: ActorInterface={}
  constructor(
    private readonly _actorService:ActorService
  ) { }

  ngOnInit() {
  }

  crearActor(){
    if (!this.actor.retirado)
      this.actor.retirado = false
    this._actorService.crear(this.actor)
  }

}
