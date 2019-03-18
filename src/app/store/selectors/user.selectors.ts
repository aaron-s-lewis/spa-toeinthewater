import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserModel } from 'src/app/user.model';

export const selectUser = createFeatureSelector<UserModel>("user");

export const selectUserName = createSelector(
  selectUser,
  (state: UserModel) => state.givenName
);

export const selectUserEmail = createSelector(
  selectUser,
  (state: UserModel) => state.email
);
