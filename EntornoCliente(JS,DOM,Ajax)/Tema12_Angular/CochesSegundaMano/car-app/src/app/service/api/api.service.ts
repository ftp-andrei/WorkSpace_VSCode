import { Injectable } from '@angular/core';
// Importamos las interfaces del login y del response
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
// Importamos libreria http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // URL de la API
  url: string = 'http://localhost:8005/api/';
  // A partir de ahora para referirnos a HttpClient usamos http
  constructor(private http: HttpClient) {}
  // Form es de tipo LoginI, retorna un array de tipo ResponseI
  loginByEmail(name,password): Observable<ResponseI> {
    // Usamos direccion como metodo post y enviamos form como parametro 
    let direccion = this.url + 'auth';
    return this.http.post<ResponseI>(direccion, {name,password});
  }
}

