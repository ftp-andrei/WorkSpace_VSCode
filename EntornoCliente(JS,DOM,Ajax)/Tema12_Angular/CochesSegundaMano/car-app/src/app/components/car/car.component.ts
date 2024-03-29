import { Component, Input } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public data: Car[];
  @Input() title = "Coches en venta";

  buscarCoche = this.fb.group({
    buscador: ['', [Validators.required]],
  });
constructor(private carService: CarService,private fb: FormBuilder, private route: Router) {
  // Data
  this.data = [];
}

ngOnInit(): void {
  this.carService.getCars().subscribe(res => this.data = res.data);
}

onSubmit() {
  if(this.buscarCoche.value.buscador){
    this.data=this.data.filter(
      (element) => element.marca.startsWith(this.buscarCoche.value.buscador+'') || element.modelo.startsWith(this.buscarCoche.value.buscador+'') 
    );
  }
}

verCoche(id: string){
  sessionStorage.setItem('id',id);
// Redirigir a la ruta
this.route.navigateByUrl("/car-details");
}
}