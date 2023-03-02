import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact.page/contact.page.component';
import { FormularioPageComponent } from './pages/formulario.page/formulario.page.component';
import { HomePageComponent } from './pages/home.page/home.page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'form', component: FormularioPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
