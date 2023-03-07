import { NgModule } from '@angular/core';
// Para las rutas
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ProductospageComponent } from './pages/productospage/productospage.component';
// Componentes para rutas

const routes: Routes = [
  { 
    //Ruta URL
    path: 'productos',
    //Titulo pagina 
    title:'Productos', 
    //Componente
    component: ProductospageComponent
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
    component: LoginpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
