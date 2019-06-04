import {Injectable} from "@angular/core";
import {ActorInterface} from "../interfaces/actor.interface";
import {actor} from "../constantes/database";

@Injectable()
export class ActorService{
  actor = actor

  obtenerTodos(){
    return this.actor
  }

  obtenerPorId(id:number){
    return this.actor.find(value=>{
      return value.idActor==id
    })
  }

  eliminar(actor: ActorInterface){
    const indiceActor = this.actor.indexOf(actor)
    return this.actor.splice(indiceActor,indiceActor+1)
  }

  crear(actor: ActorInterface){
    actor.idActor =this.actor[this.actor.length-1] ?  this.actor[this.actor.length-1].idActor+1:1
    return this.actor.push(actor)
  }

  busqueda(nombre:string){
    if(nombre.length>2)
    return this.actor.filter(actor=>{
      return actor.nombres.includes(nombre)
    })
    else
      return this.actor
  }

}
