import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Obtener token
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ProductospageComponent } from './pages/productospage/productospage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductFormComponent,
    ProductListComponent,
    AdminPanelComponent,
    LoginpageComponent,
    ProductospageComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
