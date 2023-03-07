import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Para validar
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-detalle-coche',
  templateUrl: './detalle-coche.component.html',
  styleUrls: ['./detalle-coche.component.css']
})
export class DetalleCocheComponent {
@Input() title : string="Detalles de tu coche";
  //Esto es el formulario. Lo creamos aquí.
  carForm = this.fb.group({
    //Esto es para validar. Son campos requeridos
    id: ['', [Validators.required, this.forbiddenNameValidator()]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.carForm.value);
  }
  //Si tiene numeros petará.
  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}