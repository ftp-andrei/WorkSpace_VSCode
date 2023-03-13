import { Car } from "./car.model";

export class CarResponse {
  data: Car[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}
// Devuelve los datos de un auto, o error.