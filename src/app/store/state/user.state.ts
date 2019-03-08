import { IUser } from "../../user.model";

export interface IUserState {
  user: IUser;
}

export const initialUserState: IUserState = {
  user: null
};
