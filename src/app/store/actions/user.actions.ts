import { Action } from "@ngrx/store";
import { UserModel } from "src/app/user.model";

export enum EUserActions {
  SetUser = "[User] Set User",
  SetUserModuleValue = "[User] Set User Module Value"
}

export interface SetUserModuleValuePayload {
  name: string;
  value: any;
}

export class SetUserModuleValue implements Action {
  public readonly type = EUserActions.SetUserModuleValue;

  constructor(public payload: SetUserModuleValuePayload) {}
}

export class SetUser implements Action {
  public readonly type = EUserActions.SetUser;
  constructor(public payload: UserModel) {}
}

export type UserActions = SetUserModuleValue;
