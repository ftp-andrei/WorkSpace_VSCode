import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'venta',
    component: CochesVentaComponent
  },
  {
    path: 'vendeTuCoche',
    component: VendeTuCocheComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
