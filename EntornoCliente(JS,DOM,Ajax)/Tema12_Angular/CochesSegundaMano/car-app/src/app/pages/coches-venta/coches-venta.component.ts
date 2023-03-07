import { Component,Input } from '@angular/core';
// Importamos los coches
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-coches-venta',
  templateUrl: './coches-venta.component.html',
  styleUrls: ['./coches-venta.component.css']
})
export class CochesVentaComponent {
  @Input() title: string="Coches en venta";
}
