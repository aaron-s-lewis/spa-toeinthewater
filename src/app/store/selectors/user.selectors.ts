import { IAppState } from "../../app.state";
import { IUserState } from "../state/user.state";
import { createSelector } from "@ngrx/store";

export const selectUser = (state: IAppState) => state.user;

export const selectUserName = createSelector(
  selectUser,
  (state: IUserState) => state.user
);
