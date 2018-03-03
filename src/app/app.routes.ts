import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/core";
import { HomeComponent } from "./components/home/home.component";
import { IngresoComponent } from "./components/ingreso/ingreso.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { SinginComponent } from "./components/singin/singin.component";
import { SingoutComponent } from "./components/singout/singout.component";
import { StockComponent } from "./components/stock/stock.component";
import { ComprasRealizadasComponent } from "./components/compras-realizadas/compras-realizadas.component";

//Definir rutas de navegacion
export const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ingreso',
        component: IngresoComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'singin',
        component: SinginComponent
    },
    {
        path: 'singout',
        component: SingoutComponent
    },
    {
        path: 'stock',
        component: StockComponent
    }, 
    {
        path: 'compras-realizadas',
        component: ComprasRealizadasComponent
    }
];

// Exportar y definir cual es el componente o pantalla inicial.
export const routes: ModuleWithProviders = RouterModule.forRoot(router);