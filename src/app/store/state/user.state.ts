import { UserModel } from "../../user.model";

export interface IUserState {
  user: UserModel;
}

export const initialUserState: IUserState = {
  user: null
};
