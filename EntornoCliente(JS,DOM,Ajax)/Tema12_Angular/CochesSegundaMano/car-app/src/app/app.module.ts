import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Añadimos la variable routingComponents creada en routing
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//Para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Obtener token
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  //Aqui se importan los componentes que se van a usar en el modulo
  //En esta caso, solo importamos la variable routing la cual contiene los modulos
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Se importan los formularios para poder usarlos en el modulo
    FormsModule,
    ReactiveFormsModule,
    //Libreria pal token
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
