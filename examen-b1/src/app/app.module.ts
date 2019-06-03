import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import {MatInputModule} from "@angular/material";
import { MenuComponent } from './componentes/menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PeliculaModule} from "./modulos/pelicula/pelicula.module";
import {ActorModule} from "./modulos/actor/actor.module";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoEncontradaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ActorModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
