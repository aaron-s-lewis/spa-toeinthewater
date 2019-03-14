import { Action } from "@ngrx/store";
import { UserModel } from "src/app/user.model";

export enum EUserActions {
  SetUser = "[User] Set User"
}

export interface SetUserModuleValuePayload {
  name: string;
  value: string;
}

export class SetUser implements Action {
  public readonly type = EUserActions.SetUser;
  constructor(public payload: UserModel) {}
}

export type UserActions = SetUser;
