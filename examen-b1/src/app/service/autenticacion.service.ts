import {Injectable} from "@angular/core";

@Injectable()
export class AutenticacionService {
  cajero:string

  setearCajero(nombre: string) {
    this.cajero = nombre
  }
}
