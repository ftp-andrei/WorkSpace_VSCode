import { NgModule } from '@angular/core';
// Esto es para el routerlink
import { RouterModule, Routes } from '@angular/router';
// Importamos las paginas del navbar y ponemos las rutas
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CarDetailsPageComponent } from './pages/car-details-page/car-details-page.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';
// Aqui se ponen las rutas
const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'coches-en-venta',
    title: 'Coches en venta',
    component: CochesVentaComponent
  },
  {
    path: 'vende-tu-coche',
    title: 'Vende tu coche',
    component: VendeTuCocheComponent
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutPageComponent
  },
  {
    path: 'contact-us',
    title: 'Contact Us',
    component: ContactPageComponent
  },
  {
    path: 'car-details',
    title: 'Detalles',
    component: CarDetailsPageComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
