import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  bookForm = this.fb.group({
    name: ['', [Validators.required, this.forbiddenNameValidator()]],
    isbn: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    pages: ['', [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder, private bookService: BookService) { }

  onSubmit() {
    this.bookService.postBookData(this.bookForm.value)
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
