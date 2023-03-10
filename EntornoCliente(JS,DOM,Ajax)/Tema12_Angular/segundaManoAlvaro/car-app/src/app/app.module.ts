import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CochesVentaComponent } from './pages/coches-venta/coches-venta.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { SellCarComponentComponent } from './components/sell-car-component/sell-car-component.component';
import { VendeTuCocheComponent } from './pages/vende-tu-coche/vende-tu-coche.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponentComponent } from './components/about-us-component/about-us-component.component';
import { ContactUsComponentComponent } from './components/contact-us-component/contact-us-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarComponent,
    CochesVentaComponent,
    NotFoundComponent,
    CarDetailsComponent,
    SellCarComponentComponent,
    VendeTuCocheComponent,
    AboutUsComponent,
    ContactUsComponent,
    AboutUsComponentComponent,
    ContactUsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
