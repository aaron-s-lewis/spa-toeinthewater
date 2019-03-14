import { ActionReducerMap } from "@ngrx/store";
import { userReducers } from "./user.reducers";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  session: userReducers
};
