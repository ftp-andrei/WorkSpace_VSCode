import { Car } from "./car.model";

export class CarR {
  data: Car[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}