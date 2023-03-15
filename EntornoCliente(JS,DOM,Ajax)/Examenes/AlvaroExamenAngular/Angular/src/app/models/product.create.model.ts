import { User } from "./user.model";

export class ProductCreate {
  name: string;

  description: string;

  price: number;

  user: User | null;

  constructor() {
    this.name = "";
    this.description = "";
    this.price = 0;
    this.user = null;
  }
}
