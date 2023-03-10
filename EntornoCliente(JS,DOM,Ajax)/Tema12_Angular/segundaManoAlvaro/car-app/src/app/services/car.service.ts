import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponse } from '../models/car.response.model';
import { environment } from '../environments/environment';
import { Car } from '../models/car.model';
import { CarCreate } from '../models/car.create.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}cars`);
  }

  getCarByID(id:string): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}cars/${id}`);
  }

  postCar(body:any):Car {
    let bodyData = new CarCreate();
    bodyData.marca = body.marca;
    bodyData.modelo = body.modelo;
    bodyData.fecha = body.fecha;
    bodyData.precio = body.precio;
    bodyData.imagen = body.imagen;
    bodyData.descripcion = body.descripcion;

    let result = new Car();
    this.http.post<Car>(`${environment.API_URL}cars`, bodyData)
      .subscribe(
        {
          next(car) {
            result = car;
          },
          error(err) {
            console.error('something wrong occurred: ' + err);
          },
          complete() {
            console.log('done');
          },
        }
      )
    return result;
  }
}
