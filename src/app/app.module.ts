import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingoutComponent } from './components/singout/singout.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { StockComponent } from './components/stock/stock.component';
import { ComprasRealizadasComponent } from './components/compras-realizadas/compras-realizadas.component';
import { routes } from './app.routes';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductoComponent,
    SinginComponent,
    SingoutComponent,
    IngresoComponent,
    StockComponent,
    ComprasRealizadasComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
