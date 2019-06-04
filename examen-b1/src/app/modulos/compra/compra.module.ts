import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraListarComponent } from './compra-listar/compra-listar.component';
import { CompraCrearComponent } from './compra-crear/compra-crear.component';
import {CompraRoutingModule} from "./compra-routing.module";
import {MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CompraService} from "../../service/compra.service";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [CompraListarComponent, CompraCrearComponent],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MatInputModule,
    FormsModule,
    TableModule
  ],
  providers:[
  CompraService
  ]
})
export class CompraModule { }
