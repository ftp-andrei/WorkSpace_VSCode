import { product } from "./product.model";

export class productResponse {
  data: product[];

  error: string | null;

  constructor() {
    this.data = [];
    this.error = null;
  }
}
