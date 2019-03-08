import { Action } from "@ngrx/store";

export enum EUserActions {
  GetUser = "[User] Get User",
  SetUser = "[User] Set User"
}

export interface SetUserModuleValuePayload {
  name: string;
  value?: string;
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload?: any) {}
}

export class SetUser implements Action {
  public readonly type = EUserActions.SetUser;
  constructor(public payload: SetUserModuleValuePayload) {}
}

export type UserActions = GetUser | SetUser;
