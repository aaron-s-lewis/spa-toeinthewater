import { Action } from "@ngrx/store";

export enum EUserActions {
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

export type UserActions = SetUserModuleValue;
