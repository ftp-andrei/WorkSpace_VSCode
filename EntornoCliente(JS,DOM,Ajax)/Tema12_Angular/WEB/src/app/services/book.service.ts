import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from '../environments/environment';
import { BookResponse } from '../models/book.response.model';
import { BookCreate } from '../models/book.create.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {

  }
  getBookData(): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${environment.API_URL}books`);
  }

  postBookData(body: any): Book {
    let bodyData = new BookCreate();
    bodyData.isbn = body.isbn;
    bodyData.name = body.name;
    bodyData.pages = body.pages;
    bodyData.fecha = new Date();

    let result = new Book();
    this.http.post<Book>(`${environment.API_URL}books`, bodyData)
      .subscribe(
        {
          next(book) {
            result = book;
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
