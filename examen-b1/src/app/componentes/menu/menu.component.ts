import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  irAdministrarGrupos(){
    this._router.navigate(['/actor','listar'])
  }

}
