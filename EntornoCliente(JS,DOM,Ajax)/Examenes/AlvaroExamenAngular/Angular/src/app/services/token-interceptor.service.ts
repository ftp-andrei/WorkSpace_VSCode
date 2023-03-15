import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private localStorage: LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // queda mover esto a un service de login
    const tokenJWT = this.localStorage.getData('tokenjwt');
    
    if (tokenJWT) {
      let jwtToken = req.clone({
        setHeaders: {
          Authorization: tokenJWT
        }
      });
      return next.handle(jwtToken);
    } else {
      return next.handle(req);
    }
  }
}
