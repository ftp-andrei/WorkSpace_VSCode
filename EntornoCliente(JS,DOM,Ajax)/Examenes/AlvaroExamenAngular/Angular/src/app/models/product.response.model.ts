import { Car } from "./car.model";
import { Product } from "./product.model";

export class ProductResponse {
  data: Product[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}
