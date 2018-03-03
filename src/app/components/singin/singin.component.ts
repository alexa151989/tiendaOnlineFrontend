import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router/src/config';
import { Console } from '@angular/core/src/console';
import {Router} from '@angular/router';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']

})
export class SinginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
loginUser(e){
  e.preventDefault();
  console.log(e);
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;

  if(username == 'diego' && password == '123')
  this.router.navigate(['home'])
 
}
}
