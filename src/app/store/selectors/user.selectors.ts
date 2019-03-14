import { IAppState } from "../../app.state";
import { IUserState } from "../state/user.state";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectUser = createFeatureSelector<IUserState>("user");

export const selectUserName = createSelector(
  selectUser,
  (state: IUserState) => state.user.name
);

export const selectUserEmail = createSelector(
  selectUser,
  (state: IUserState) => state.user.email
);
