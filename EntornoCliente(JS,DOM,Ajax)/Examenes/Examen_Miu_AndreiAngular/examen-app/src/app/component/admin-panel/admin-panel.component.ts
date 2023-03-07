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
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  @Input() title: string = 'Admin Panel';
//Esto es el formulario. Lo creamos aquí.
adminPanel = this.fb.group({
  //Esto es para validar. Son campos requeridos
  Nombre: ['', [Validators.required, this.forbiddenNameValidator()]],
  Precio: ['', [Validators.required]],
  Descripcion: ['', [Validators.required]],
});

constructor(private fb: FormBuilder) {}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.adminPanel.value);
}
//Si tiene numeros petará.
forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /\d/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
}