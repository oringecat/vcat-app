/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-05
 */

import { http, IRequest } from "../http";
import { IUser } from "./user";

export class UserService {
    static checkToken(): void {
        http("/user/checktoken", "get");
    }

    static login(params: IRequest<IUser>): void {
        http("/user/login", "post", params);
    }

    static getList(params: IRequest<IUser>): void {
        http("/user/register", "post", params);
    }
}