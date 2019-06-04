import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre

  constructor(
    private readonly _router: Router,
    private readonly _cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  irAMenu(){
    this._cookieService.set("cajero", this.nombre)
    this._router.navigate(['/menu'])
  }

}
