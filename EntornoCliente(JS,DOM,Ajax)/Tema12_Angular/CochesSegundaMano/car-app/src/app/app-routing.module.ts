import { NgModule } from '@angular/core';
// Para las rutas
import { RouterModule, Routes } from '@angular/router';
// Componentes para rutas
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleCocheComponent } from './pages/detalle-coche/detalle-coche.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VenderCocheComponent } from './pages/vender-coche/vender-coche.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Añadir rutas
const routes: Routes = [
  { 
    //Ruta URL
    path: 'inicio',
    //Titulo pagina 
    title:'Inicio' , 
    //Componente
    component: InicioComponent 
  },
  { 
    //Ruta URL
    path: '',
    // Redirigir
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { 
    //Ruta URL
    path: 'login',
    //Titulo pagina
    title:'Login' , 
    //Componente
    component: LoginComponent 
  },
  { 
    path: 'about-us', 
    title:'About Us' ,
    component: AboutUsComponent 
  },
  { 
    path: 'coches-venta',
    title:'Coches en venta' , 
    component: CochesVentaComponent 
  },
  { 
    path: 'contacto', 
    title:'Contacto' ,
    component: ContactoComponent 
  },
  { 
    path: 'detalle-coche', 
    title:'Detalles coche' ,
    component: DetalleCocheComponent 
  },
  { 
    path: 'vender-coche', 
    title:'Vender tu coche' ,
    component: VenderCocheComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Exportamos componentes
export const routingComponents = [
  LoginComponent,
  InicioComponent,
  AboutUsComponent,
  CochesVentaComponent,
  ContactoComponent,
  DetalleCocheComponent,
  VenderCocheComponent,
  NavbarComponent
]; 
