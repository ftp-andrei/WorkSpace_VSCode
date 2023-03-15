import { UserLoginResData } from "./user.login.data.model";

export class UserLoginRes {
    error: string;

    data: UserLoginResData ;

    message: string;

    constructor() {
        this.error = "";
        this.data = new UserLoginResData();
        this.message = "";
    }
}
