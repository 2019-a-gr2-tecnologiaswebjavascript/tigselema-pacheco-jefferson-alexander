import {Injectable} from "@angular/core";
import {PeliculaInterface} from "../interfaces/pelicula.interface";


@Injectable()
export class PeliculaService{
  peliculas: PeliculaInterface[] = []

  obtenerTodos(id:number){
    return this.peliculas.filter(value=>{
      return value.actorId == id
    })
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

  crear(pelicula: PeliculaInterface){
    pelicula.idPelicula = this.peliculas[this.peliculas.length-1] ? this.peliculas[this.peliculas.length-1].idPelicula+1:1
    return this.peliculas.push(pelicula)
  }
}
