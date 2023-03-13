import { EmailCreate } from "./email.create.model";

export class Email extends EmailCreate {
  _id: number;

  fecha: Date | null;

  constructor() {
    super();
    this._id = 0;
    this.fecha = null;
  }
}
