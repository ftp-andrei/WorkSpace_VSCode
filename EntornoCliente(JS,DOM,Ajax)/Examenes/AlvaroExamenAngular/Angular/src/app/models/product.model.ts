import { ProductCreate } from "./product.create.model";
import { User } from "./user.model";

export class Product extends ProductCreate {
    id: string;

    constructor() {
        super();
        this.id = "";
    }
}
