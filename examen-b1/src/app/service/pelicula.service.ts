import {Injectable} from "@angular/core";
import {PeliculaInterface} from "../interfaces/pelicula.interface";
import {peliculas} from "../constantes/database";


@Injectable()
export class PeliculaService{
  peliculas = peliculas

  obtenerTodos(id:number){
      console.log(this.peliculas)
    return this.peliculas.filter(value=>{
      return value.actorId == id
    })
  }

  obtenerTodosTodos(){
    console.log(this.peliculas)
    return this.peliculas
  }

  obtenerPorId(id:number){
    return this.peliculas.find(value=>{
      return value.idPelicula==id
    })
  }

  eliminar(pelicula: PeliculaInterface){
    const indicePelicula = this.peliculas.indexOf(pelicula)
    return this.peliculas.splice(indicePelicula,indicePelicula+1)
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
