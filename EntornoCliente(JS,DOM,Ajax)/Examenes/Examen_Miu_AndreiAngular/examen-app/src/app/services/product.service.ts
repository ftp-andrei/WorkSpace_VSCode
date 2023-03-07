import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product.model';
import { environment } from '../environments/environment';
import { productResponse } from '../models/product.response.model';
import { productCreate } from '../models/product.create.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   getproductData(): Observable<productResponse> {
    return this.http.get<productResponse>(`${environment.API_URL}productos`);
  }

  postproductData(body: any): product {
    let bodyData = new productCreate();
    bodyData.name = body.name;
    bodyData.desc = body.desc;
    bodyData.precio = body.precio;

    let result = new product();
    this.http.post<product>(`${environment.API_URL}productos`, bodyData)
      .subscribe(
        {
          next(product) {
            result = product;
          },
          error(err) {
            console.error('A ocurrido un error: ' + err);
          },
          complete() {
            console.log('done');
          },
        }
      )
    return result;
  }
}
