import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ConsultaCreate } from '../models/consulta.create.model';
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postConsulta(body: any): Consulta {
    let bodyData = new ConsultaCreate();
    bodyData.nombre = body.nombre;
    bodyData.email = body.email;
    bodyData.asunto = body.asunto;
    bodyData.mensaje = body.mensaje;

    let result = new Consulta();
    this.http.post<Consulta>(`${environment.API_URL}consultas`, bodyData)
      .subscribe(
        {
          next(consulta) {
            result = consulta;
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
