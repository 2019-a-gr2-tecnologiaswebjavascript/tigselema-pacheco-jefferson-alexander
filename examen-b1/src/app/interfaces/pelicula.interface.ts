import {ActorInterface} from "./actor.interface";

export interface PeliculaInterface {
  idPelicula: number
  nombre: string
  anioLanzamiento: number
  rating: number
  actorePrincipales: string
  actorId : number | ActorInterface
}
