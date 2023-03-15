export class UserCreate {
    name: string;

    password: string;

    admin: Boolean;
  
    constructor() {
      this.name = "";
      this.password = "";
      this.admin = false;
    }
  }
  