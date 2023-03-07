export class BookCreate {
  isbn: string;

  name: string;

  pages: number;

  fecha: Date | null;

  constructor() {
    this.isbn = "";
    this.name = "";
    this.pages = 0;
    this.fecha = null;
  }
}
