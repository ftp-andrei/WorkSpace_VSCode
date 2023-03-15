import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ProductCreate } from '../models/product.create.model';
import { Product } from '../models/product.model';
import { ProductResponse } from '../models/product.response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.API_URL}products`);
  }

  // getCarByID(id: string): Observable<CarResponse> {
  //   return this.http.get<CarResponse>(`${environment.API_URL}cars/${id}`);
  // }

  // deleteCar(id: string): Observable<CarResponse> {
  //   return this.http.delete<CarResponse>(`${environment.API_URL}cars/${id}`);
  // }

  postProduct(body: any): Product {
    let bodyData = new ProductCreate();
    bodyData.name = body.name;
    bodyData.description = body.description;
    bodyData.price = body.price;
    bodyData.user = new User();

    let result = new Product();
    this.http.post<Product>(`${environment.API_URL}products`, bodyData)
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
