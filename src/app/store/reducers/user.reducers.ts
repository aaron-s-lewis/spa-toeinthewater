import { UserActions, EUserActions } from "../actions/user.actions";
import { UserModel } from "src/app/user.model";

export const initialState: UserModel = {
  givenName: null,
  surname: null,
  retirementChoice: null,
  lifestyleChoice: null,
  phone: null,
  email: null,
  password: null,
  helpChoice: null
};

export const userReducers = (
  state = initialState,
  action: UserActions
): UserModel => {
  switch (action.type) {
    case EUserActions.SetUserModuleValue: {
      return { ...state, [action.payload.name]: action.payload.value };
    }
  }
  return state;
};
