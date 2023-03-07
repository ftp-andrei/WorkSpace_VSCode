import { Car } from "./car.model";

export class CarResponse {
  data: Car[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}
