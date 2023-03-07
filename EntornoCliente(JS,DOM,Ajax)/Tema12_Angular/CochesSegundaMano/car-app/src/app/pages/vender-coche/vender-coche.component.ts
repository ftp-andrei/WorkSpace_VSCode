import { Component, Input } from '@angular/core';
//Para validar
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-vender-coche',
  templateUrl: './vender-coche.component.html',
  styleUrls: ['./vender-coche.component.css'],
})
export class VenderCocheComponent {
  //Esto es para coger el titulo en las distintas páginas
  @Input() title: string = 'Vender tu coche';
  //Esto es el formulario. Lo creamos aquí.
  carForm = this.fb.group({
    //Esto es para validar. Son campos requeridos
    marca: ['', [Validators.required, this.forbiddenNameValidator()]],
    modelo: ['', [Validators.required, this.forbiddenNameValidator()]],
    fecha: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
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

