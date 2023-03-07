import { productCreate } from "./product.create.model";

export class product extends productCreate {
  _id: number;

  constructor() {
    super();
    this._id = 0;
  }
}
