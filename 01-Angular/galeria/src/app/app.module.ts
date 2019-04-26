import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';
import {CarritoService} from "./servicios/carrito/carrito.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
