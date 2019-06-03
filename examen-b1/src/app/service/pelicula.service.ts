import {Injectable} from "@angular/core";
import {PeliculaInterface} from "../interfaces/pelicula.interface";


@Injectable()
export class PeliculaService{
  peliculas: PeliculaInterface[] = []

  obtenerTodos(a:number, b:number){
    return this.peliculas.slice(a,b)
  }

  obtenerPorId(id:number){
    return this.peliculas.find(value=>{
      return value.idPelicula==id
    })
  }

  eliminar(id:number){
    return this.peliculas.splice(id,id+1)
  }

  obtenerPorIdActor(idActor:number){
    return this.peliculas.find(value =>{
      return value.actorId==idActor
    } )
  }
}
