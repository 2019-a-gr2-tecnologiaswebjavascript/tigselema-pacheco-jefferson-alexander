import { Component, OnInit } from '@angular/core';
import {CompraInterface} from "../../../interfaces/compra.interface";
import {PeliculaService} from "../../../service/pelicula.service";
import {PeliculaInterface} from "../../../interfaces/pelicula.interface";
import {Router} from "@angular/router";
import {ActorService} from "../../../service/actor.service";
import {AutenticacionService} from "../../../service/autenticacion.service";

@Component({
  selector: 'app-compra-crear',
  templateUrl: './compra-crear.component.html',
  styleUrls: ['./compra-crear.component.css']
})
export class CompraCrearComponent implements OnInit {
  compra: CompraInterface = {
    productos: []
  }
  peliculas: PeliculaInterface[] = []
  constructor(
    private readonly _peliculaService: PeliculaService,
    private readonly _router: Router,
    private readonly _actorService: ActorService,
    private readonly _autenticacionService: AutenticacionService
  ) { }

  ngOnInit() {
    this.peliculas = this._peliculaService.obtenerTodosTodos()
  }

  irMenu(){
    this._router.navigate(['/menu'])
  }

  addPelicula(peli: PeliculaInterface){
    const existePelicula = this.compra.productos.some(pelicula=>{
      return pelicula.idPelicula == peli.idPelicula
    })
    if(!existePelicula) {
      peli.cantidad=1
      this.compra.productos.push(peli)
    }else{
      this.compra.productos.find(pelicula=>{
        return pelicula.idPelicula == peli.idPelicula
      }).cantidad+=1
    }
  }

  sacarPelicula(pelicula:PeliculaInterface){
    const indice = this.compra.productos.indexOf(pelicula)

    if(this.compra.productos[indice].cantidad>1){
      this.compra.productos[indice].cantidad-=1
    }else{
      this.compra.productos.splice(indice,indice+1)
    }
  }

}
