import { UserLoginRes } from "./user.login.res.model";

export class UserLoginResponse {
    data: UserLoginRes ;

    error: string | null;

    constructor() {
        this.data = new UserLoginRes();
        this.error = null;
    }
}
