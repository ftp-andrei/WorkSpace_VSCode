import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserLogin } from '../models/user.login.model';
import { UserLoginResponse } from '../models/user.login.response.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public cosa: UserLoginResponse;
  constructor(private localStorage: LocalStorageService, private http: HttpClient ) { 
    this.cosa=new UserLoginResponse();
  }



  // crear login, devuelve User, se crea un nuevo LoginCreate
  logear(body: any): UserLoginResponse {
    let bodyData = new UserLogin();
    bodyData.email = body.email;
    bodyData.password = body.password;

    let result = new UserLoginResponse();
    this.http.post<UserLoginResponse>(`${environment.API_URL}user/login`, bodyData).subscribe(res => this.cosa = res);
    this.localStorage.saveData('tokenjwt', this.cosa.data.data.token);
    return result;
  }

}
