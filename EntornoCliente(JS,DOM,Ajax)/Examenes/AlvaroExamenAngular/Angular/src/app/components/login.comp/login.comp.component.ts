import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login.comp.component.html',
  styleUrls: ['./login.comp.component.css']
})
export class LoginCompComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, this.forbiddenNameValidator()]],
    password: ['', [Validators.required, Validators.maxLength(40)]],
  });

  constructor(private fb: FormBuilder, private loginService:LoginService) { }

  onSubmit() {
    this.loginService.logear(this.loginForm.value);
    document.location='http://localhost:4200/productos';
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
