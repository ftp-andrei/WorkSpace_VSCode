import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-comp',
  templateUrl: './register.comp.component.html',
  styleUrls: ['./register.comp.component.css']
})
export class RegisterCompComponent {
  registerForm = this.fb.group({
    name: ['', [Validators.required, this.forbiddenNameValidator()]],
    email: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.maxLength(40)]],
  });

  constructor(private fb: FormBuilder,private registerService: RegisterService) { }

  onSubmit() {
    this.registerService.registerUser(this.registerForm.value);
    // document.location='http://localhost:4200/login';
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
