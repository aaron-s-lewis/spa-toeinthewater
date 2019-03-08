import { IUserState, initialUserState } from "./store/state/user.state";

export interface IAppState {
  user: IUserState;
}

export const inititalAppState: IAppState = {
  user: initialUserState
};

export function getInitialState(): IAppState {
  return inititalAppState;
}
