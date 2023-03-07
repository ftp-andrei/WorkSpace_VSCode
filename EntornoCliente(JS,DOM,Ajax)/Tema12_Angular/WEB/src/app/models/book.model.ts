import { BookCreate } from "./book.create.model";

export class Book extends BookCreate {
  _id: number;

  constructor() {
    super();
    this._id = 0;
  }
}
