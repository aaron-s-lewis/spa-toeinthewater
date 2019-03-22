import { Action } from "@ngrx/store";
import { UserModel } from 'src/app/user.model';

export enum EUserActions {
  SetUser = "[User] Set User",
  SetUserModuleValue = "[User] Set User Module Value",
}

export const SUBMIT_APPLICATION_FORM = "[User] Submit registration Form";

export interface SetUserModuleValuePayload {
  name: string;
  value: any;
}

export class SetUserModuleValue implements Action {
  public readonly type = EUserActions.SetUserModuleValue;

  constructor(public payload: SetUserModuleValuePayload) { }
}

export class SetUser implements Action {
  public readonly type = EUserActions.SetUser;
  constructor(public payload: UserModel) { }
}

export class SubmitApplication implements Action {
  public readonly type = SUBMIT_APPLICATION_FORM;
  constructor(public payload: UserModel) { }
}

export type UserActions = SetUserModuleValue | SubmitApplication;

