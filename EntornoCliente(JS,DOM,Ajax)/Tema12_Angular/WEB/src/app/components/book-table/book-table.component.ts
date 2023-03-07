import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  public data: Book[];
  constructor(private bookService: BookService) {
    this.data = [];
  }
  ngOnInit(): void {
    this.bookService.getBookData().subscribe(res => this.data = res.data);
  }
}
