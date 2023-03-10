import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'coches-en-venta',
    component: CochesVentaComponent
  },
  {
    path: 'vende-tu-coche',
    component: VendeTuCocheComponent
  },
  {
    path: 'about-us',
    component: AboutPageComponent
  },
  {
    path: 'contact-us',
    component: ContactPageComponent
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
