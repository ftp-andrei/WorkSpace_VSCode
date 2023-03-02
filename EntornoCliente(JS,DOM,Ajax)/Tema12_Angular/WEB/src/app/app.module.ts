import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosNoCreativosComponent } from './components/alumnos-no-creativos/alumnos-no-creativos.component';
import { HomePageComponent } from './pages/home.page/home.page.component';
import { ContactPageComponent } from './pages/contact.page/contact.page.component';
import { FormsModule } from '@angular/forms';
import { FormularioPageComponent } from './pages/formulario.page/formulario.page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosNoCreativosComponent,
    HomePageComponent,
    ContactPageComponent,
    FormularioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
