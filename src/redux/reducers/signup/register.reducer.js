import * as type from '../../constants'

const initialState = {
  data: {},
  check: false
}

export const  registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_REGISTER_REQUESTED:
      return {
        ...state,
        check: true
      }
    case type.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
        check: false
      }

    default:
      return {
        ...state,
      }
  }
}