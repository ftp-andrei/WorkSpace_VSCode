import { CarCreate } from "./car.create.model";

export class Car extends CarCreate {
  _id: string;

  constructor() {
    super();
    this._id = '';
  }
}
