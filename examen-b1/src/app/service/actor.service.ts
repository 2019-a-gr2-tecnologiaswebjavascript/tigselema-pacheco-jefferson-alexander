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
    return this.actor.splice(id,id+1)
  }

  crear(actor: ActorInterface){
    return this.actor.push(actor)
  }

}
