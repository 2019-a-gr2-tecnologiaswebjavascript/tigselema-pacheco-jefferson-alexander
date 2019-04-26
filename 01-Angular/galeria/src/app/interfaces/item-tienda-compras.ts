export interface ItemTiendaCompras{
  nombreTienda: string;
  productos:[
    {
      valor: string,
      fechaCompra?:Date,
      cantidad?:number,
    }
    ]
}
