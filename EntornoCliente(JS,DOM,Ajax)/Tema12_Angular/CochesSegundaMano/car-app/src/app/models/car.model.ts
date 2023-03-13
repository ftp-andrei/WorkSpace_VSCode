import { CarCreate } from "./car.create.model";

export class Car extends CarCreate {
  _id: string;

  constructor() {
    super();
    this._id = '';
  }
}
// Para crear hace falta añadir el campo id, que lo pone Mongo