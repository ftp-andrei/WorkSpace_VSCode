import { Book } from "./book.model";

export class BookResponse {
  data: Book[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}
