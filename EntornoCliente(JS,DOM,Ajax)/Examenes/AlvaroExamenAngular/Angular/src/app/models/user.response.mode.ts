import { User } from "./user.model";

export class UserResponse {
    data: User | null;

    error: string | null;

    constructor() {
        this.data = null;
        this.error = null;
    }
}
