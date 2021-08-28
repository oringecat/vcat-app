import { IAppState } from "./app";
import { IUserState } from "./user";

export interface IGlobalState {
  app: IAppState;
  user: IUserState;
}