import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario.page',
  templateUrl: './formulario.page.component.html',
  styleUrls: ['./formulario.page.component.css']
})
export class FormularioPageComponent {
  data = new FormModel();
  constructor() {
    this.data.name = "hola";
  }
}
