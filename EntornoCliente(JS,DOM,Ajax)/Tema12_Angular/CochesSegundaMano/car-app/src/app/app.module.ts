import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { SellCarComponentComponent } from './components/sell-car-component/sell-car-component.component';
import { CarComponent } from './components/car/car.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
//Paginas
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarDetailsPageComponent } from './pages/car-details-page/car-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarDetailsComponent,
    SellCarComponentComponent,
    CarComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    AboutPageComponent,
    ContactPageComponent,
    CochesVentaComponent,
    VendeTuCocheComponent,
    InicioComponent,
    InicioComponentComponent,
    CarDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
