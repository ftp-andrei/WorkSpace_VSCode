import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserCreate } from '../models/user.create';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(body: any): User {
    let bodyData = new UserCreate();
    bodyData.name = body.name;
    // bodyData.email = body.email;
    bodyData.password = body.password;

    let result = new User();
    this.http.post<User>(`${environment.API_URL}user/register`, bodyData)
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
