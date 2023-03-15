import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'formulario',
    component: ProductFormPageComponent
  },
  {
    path: 'admin',
    component: AdminPanelPageComponent
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
