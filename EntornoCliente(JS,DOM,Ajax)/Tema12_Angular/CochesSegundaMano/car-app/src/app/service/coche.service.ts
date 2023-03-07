import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Car } from '../models/car.model';
import { CarResponse } from '../models/car.response.model';


@Injectable({
  providedIn: 'root'
})
// Servicio para el CRUD de coches
export class CocheService {
  constructor(private http: HttpClient) {}
  // Ver todos los coches
  getCoches(): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}coches`);
  }
  // Borrar coche por id
  deleteCoche(id: number): Observable<CarResponse> {
    return this.http.delete<CarResponse>(`${environment.API_URL}coches/${id}`);
  }
  // Añadir coche
  addCoche(coche: Partial<CarResponse>): Observable<CarResponse> {
    return this.http.post<CarResponse>(`${environment.API_URL}coches`, coche);
  }
  // Busca coche por id
  getCoche(id: number): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${environment.API_URL}coches/${id}`);
  }

  postCoche(body: any): Car {
    let bodyData = new Car();
    bodyData.marca = body.marca;
    bodyData.modelo = body.modelo;
    bodyData.fecha = new Date();
    bodyData.precio = body.precio;
    bodyData.img = body.img;

    let result = new Car();
    this.http.post<Car>(`${environment.API_URL}coches`, bodyData)
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