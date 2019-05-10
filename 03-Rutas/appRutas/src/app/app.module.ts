import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditosComponent } from './rutas/creditos/creditos.component';
import { HomeComponent } from './rutas/home/home.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import { ProductosComponent } from './rutas/productos/productos.component';
import { ProductosHogarComponent } from './rutas/productos-hogar/productos-hogar.component';
import { ProductosVideojuegosComponent } from './rutas/productos-videojuegos/productos-videojuegos.component';
import { ProductoVideojuegosPlataformaComponent } from './rutas/producto-videojuegos-plataforma/producto-videojuegos-plataforma.component';
import { ProductoVideojuegosRpgComponent } from './rutas/producto-videojuegos-rpg/producto-videojuegos-rpg.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditosComponent,
    HomeComponent,
    NoEncontradoComponent,
    ProductosComponent,
    ProductosHogarComponent,
    ProductosVideojuegosComponent,
    ProductoVideojuegosPlataformaComponent,
    ProductoVideojuegosRpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
