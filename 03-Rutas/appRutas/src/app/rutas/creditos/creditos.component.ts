import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.queryParams;
    // El signo de dolar significa que esa variable es un observable

    console.log('Inicio');
    parametros$.subscribe(
      (parametros) => {
        console.log(parametros);
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('completo');
      }
      );
    console.log('Fin');
  }

}
