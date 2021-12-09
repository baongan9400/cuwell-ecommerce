import * as type from "../../constants";

const initialState = {
  data: {},
  checkSignup: false,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_REGISTER_REQUESTED:
      return {
        ...state,
        checkSignup: true,
      };
    case type.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
        checkSignup: false,
      };

    default:
      return {
        ...state,
      };
  }
};
