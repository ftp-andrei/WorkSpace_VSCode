import { CarCreate } from "./car.create.model";

export class Car extends CarCreate{
    _id: number;
  
    constructor() {
      super();
      this._id = 0;
    }
  }
  