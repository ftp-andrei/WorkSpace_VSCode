import { UserCreate } from "./user.create";

export class User extends UserCreate {
  id: number;

  dateCreation: Date | null
  constructor() {
    super();
    this.id = 0;
    this.dateCreation = null;
  }
}
