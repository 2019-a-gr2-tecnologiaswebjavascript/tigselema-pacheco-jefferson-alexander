import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AutenticacionService} from "../../service/autenticacion.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre

  constructor(
    private readonly _router: Router,
    private readonly _autenticacionService: AutenticacionService
  ) { }

  ngOnInit() {
  }

  irAMenu(){
    this._autenticacionService.setearCajero(this.nombre)
    this._router.navigate(['/menu'])
  }

}
