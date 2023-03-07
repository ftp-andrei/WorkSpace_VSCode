import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//Importamos servicio de API
import { ApiService } from '../../service/api/api.service';
// Importamos la interfaz de Login
import { LoginI } from '../../models/login.interface';
// Importamos esto para que una vez se haya logueado se redirecciona a la pagina principal
import { Router } from '@angular/router';
// Importamos las funciones de response de la API
import { ResponseI } from '../../models/response.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isOk: boolean | null;
  login = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.isOk = null;
  }

  onSubmit(): void {
    // Llamamos a la funcion de api service
    this.api.loginByEmail(this.login.value.name,this.login.value.password).subscribe((data) => {
      let dataResponse: ResponseI = data;
      //Si es verdadero lo almacenamos
      if(dataResponse.status == 'ok'){
        localStorage.setItem('token', dataResponse.result.token);
        this.router.navigate(['/inicio']);
      }
    });
  }
}
