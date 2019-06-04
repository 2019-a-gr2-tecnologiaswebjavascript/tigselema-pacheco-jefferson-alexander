import {Injectable} from "@angular/core";
import {compras} from "../constantes/database";
import {CompraInterface} from "../interfaces/compra.interface";

@Injectable()
export class CompraService{
  compras = compras


  crear(compra:CompraInterface){
    compra.idCompra = this.compras[this.compras.length-1] ? this.compras[this.compras.length-1].idCompra+1:1
    this.compras.push(compra)
  }

  obtenerTodos(){
    return this.compras
  }
  busqueda(nombre:string){
    if(nombre.length>2)
      return this.compras.filter(compras=>{
        return compras.nombre.includes(nombre)
      })
    else
      return this.compras
  }


}
