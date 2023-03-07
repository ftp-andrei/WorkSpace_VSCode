import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { HomePageComponent } from './pages/home/home.page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: BookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
