import { Component, OnInit } from '@angular/core';
import {CompraInterface} from "../../../interfaces/compra.interface";
import {CompraService} from "../../../service/compra.service";
import {ActorService} from "../../../service/actor.service";

@Component({
  selector: 'app-compra-listar',
  templateUrl: './compra-listar.component.html',
  styleUrls: ['./compra-listar.component.css']
})
export class CompraListarComponent implements OnInit {
  buscar:string
  compras: CompraInterface[] =[]
  constructor(
    private readonly _compraService: CompraService,
    private readonly _actorService: ActorService
  ) { }

  ngOnInit() {
    this.compras = this._compraService.obtenerTodos()
  }

  busqueda(){
    this.compras = this._compraService.busqueda(this.buscar)
  }

}
