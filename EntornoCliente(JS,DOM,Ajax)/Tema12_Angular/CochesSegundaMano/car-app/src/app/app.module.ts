import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { CarDetailsComponent } from './componets/car-details/car-details.component';
import { SellCarComponentComponent } from './componets/sell-car-component/sell-car-component.component';
import { CarComponent } from './componets/car/car.component';
import { AboutComponentComponent } from './componets/about-component/about-component.component';
import { ContactComponentComponent } from './componets/contact-component/contact-component.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CarDetailsComponent,
    SellCarComponentComponent,
    CarComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    AboutPageComponent,
    ContactPageComponent,
    CochesVentaComponent,
    VendeTuCocheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
