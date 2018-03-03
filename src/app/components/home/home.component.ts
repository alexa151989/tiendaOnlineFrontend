import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: any[] = [
    {
      "titulo": "PRODUCTO 1",
      "descripcion": "",
      "precio": 19.99,
      "cantidad": 20,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDGClkc-SUO_hlWkvNzDh6Bcfq9nEJTalReXkl2F8k02QhQeI8Q"
    },
    {
      "titulo": "PRODUCTO 2",
      "descripcion": "",
      "precio": 19.99,
      "cantidad": 20,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDGClkc-SUO_hlWkvNzDh6Bcfq9nEJTalReXkl2F8k02QhQeI8Q"
    },
    {
      "titulo": "PRODUCTO 3",
      "descripcion": "",
      "precio": 19.99,
      "cantidad": 20,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDGClkc-SUO_hlWkvNzDh6Bcfq9nEJTalReXkl2F8k02QhQeI8Q"
    },
    {
      "titulo": "PRODUCTO 4",
      "descripcion": "",
      "precio": 19.99,
      "cantidad": 20,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDGClkc-SUO_hlWkvNzDh6Bcfq9nEJTalReXkl2F8k02QhQeI8Q"
    },
    {
      "titulo": "PRODUCTO 5",
      "descripcion": "",
      "precio": 19.99,
      "cantidad": 20,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDGClkc-SUO_hlWkvNzDh6Bcfq9nEJTalReXkl2F8k02QhQeI8Q"
    }];

  constructor() { }

  ngOnInit() {
  }

}
