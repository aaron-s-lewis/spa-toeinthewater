import { initialUserState, IUserState } from "../state/user.state";
import { UserActions, EUserActions } from "../actions/user.actions";

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.SetUser: {
      return { ...state, user: { name: action.payload.name } };
    }
  }
  return state;
};
