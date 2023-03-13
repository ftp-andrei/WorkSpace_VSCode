import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-sell-car-component',
  templateUrl: './sell-car-component.component.html',
  styleUrls: ['./sell-car-component.component.css']
})
export class SellCarComponentComponent {
  @Input() title = "Vende tu coche";
  carForm = this.fb.group({
    marca: ['', [Validators.required, Validators.min(1), Validators.max(30),this.forbiddenNameValidator()]],
    modelo: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
    fecha: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
    descripcion: ['', [Validators.max(255)]],
  });

  constructor(private fb: FormBuilder, private carService: CarService) { }

  onSubmit() {
    this.carService.postCar(this.carForm.value);
    // Te redirige a coches en venta para verlo
    document.location='http://localhost:4200/coches-en-venta';
  }
  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}