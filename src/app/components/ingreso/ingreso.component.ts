import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  id: String;
  cantidad: String;
  articulo: String;
  listaArticulos: any[] = [];

  constructor() { }

  agregarArticulo()
  {
    
    this.listaArticulos.push(
      {
        "id": this.id,
        "cantidad": this.cantidad,
        "articulo": this.articulo
      }
    ); 
    this.id='';
    this.cantidad='';
    this.articulo='';
  }


  ngOnInit() {
  }

}
