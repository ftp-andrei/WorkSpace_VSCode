import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EmailCreate } from '../models/email.create.model';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  
    postEmail(body: any): Email {
      let bodyData = new EmailCreate();
      bodyData.nombre = body.nombre;
      bodyData.email = body.email;
      bodyData.asunto = body.asunto;
      bodyData.mensaje = body.mensaje;
  
      let result = new Email();
      this.http.post<Email>(`${environment.API_URL}emails`, bodyData)
        .subscribe(
          {
            next(email) {
              result = email;
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

