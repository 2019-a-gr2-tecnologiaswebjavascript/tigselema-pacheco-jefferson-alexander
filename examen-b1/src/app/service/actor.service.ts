import {Injectable} from "@angular/core";
import {ActorInterface} from "../interfaces/actor.interface";

@Injectable()
export class ActorService{
  actor:ActorInterface[]=[]

  obtenerTodos(){
    return this.actor
  }

  obtenerPorId(id:number){
    return this.actor.find(value=>{
      return value.idActor==id
    })
  }

  eliminar(id:number){
    const idActorABorrar = this.actor.find(value=>{
      return value.idActor==id
    }).idActor
    return this.actor.splice(idActorABorrar-1,idActorABorrar)
  }

  crear(actor: ActorInterface){
    actor.idActor =this.actor[this.actor.length-1] ?  this.actor[this.actor.length-1].idActor+1:1
    return this.actor.push(actor)
  }

}
