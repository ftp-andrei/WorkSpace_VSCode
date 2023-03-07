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
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
//Esto es para coger el titulo en las distintas páginas
@Input() title: string = 'Formulario';
//Esto es el formulario. Lo creamos aquí.
productForm = this.fb.group({
  //Esto es para validar. Son campos requeridos
  Nombre: ['', [Validators.required, this.forbiddenNameValidator()]],
  Precio: ['', [Validators.required]],
  Descripcion: ['', [Validators.required]],
});

constructor(private fb: FormBuilder) {}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.productForm.value);
}
//Si tiene numeros petará.
forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /\d/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
}
