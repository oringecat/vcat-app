/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-05
 */

import { http, IHttpParams } from "../http";
import { IUser } from "./user";

export class UserService {
    static checkToken(params: IHttpParams): void {
        http("/user/checktoken", "get", params);
    }

    static login(params: IHttpParams<IUser>): void {
        http("/user/login", "post", params);
    }

    static getList(params: IHttpParams<IUser>): void {
        http("/user/register", "post", params);
    }
}