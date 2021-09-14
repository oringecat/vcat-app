/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-03
 */

import { Model } from "../model";
import cryptojs from "crypto-js";

interface IUser {
    id?: number;
    account?: string;
    password?: string;
    passwordHash?: string;
    realName?: string;
    avatar?: string;
}

class User extends Model<IUser> implements IUser {
    id = 0;
    account = "";
    password = "";
    passwordHash = "";
    avatar = "";
    realName = "";

    constructor(data?: IUser) {
        super(data);
        Object.assign(this, data);
    }

    getPasswordHash(): string {
        return cryptojs.SHA256(this.password).toString();
    }
}

export { IUser, User };
