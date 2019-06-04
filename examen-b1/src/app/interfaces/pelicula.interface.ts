import {ActorInterface} from "./actor.interface";

export interface PeliculaInterface {
  idPelicula?: number
  nombre?: string
  anioLanzamiento?: number
  rating?: number
  actoresPrincipales?: string
  actorId?: number | ActorInterface
}
