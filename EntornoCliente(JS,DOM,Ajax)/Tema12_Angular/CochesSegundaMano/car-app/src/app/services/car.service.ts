import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Car } from '../models/car.model';
import { CarCreate } from '../models/car.create.model';
import { CarResponse } from '../models/car.response.model';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  // Funciones de la API
  constructor(private http: HttpClient) {}
  // Obtener todos los autos de la base de datos
  getCars(): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}cars`);
  }
  // Obtener un auto por su ID de la base de datos
  getCarByID(id: string): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}cars/${id}`);
  }
  // Obtener un auto por su modelo de la base de datos
  getCarByModelo(modelo: string): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}cars/${modelo}`);
  }
  // Crear un nuevo auto en la base de datos
  postCar(body: any): Car {
    let bodyData = new CarCreate();
    bodyData.marca = body.marca;
    bodyData.modelo = body.modelo;
    bodyData.descripcion = body.descripcion;
    bodyData.precio = body.precio;
    bodyData.fecha = body.fecha;
    bodyData.imagen = body.imagen;

    let result = new Car();
    this.http.post<Car>(`${environment.API_URL}cars`, bodyData).subscribe({
      next(car) {
        result = car;
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    return result;
  }
}