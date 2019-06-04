import {PeliculaInterface} from "./pelicula.interface";

export interface CompraInterface{
  idCompra?: number
  nombre?: string
  cedula?: string
  direccion?: string
  telefono?: string
  correo?: string
  cajero?: string
  total?: number
  productos?: undefined |  PeliculaInterface[]
}
