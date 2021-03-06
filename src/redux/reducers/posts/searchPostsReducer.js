import * as type from "../../constants";

const initialState = {
  params: {
    search: "",
    category: "",
    page: 1,
    page_size: 24,
  },
  load: true,
  data: {},
};
export const searchPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOAD_POST:
      return {
        ...state,
        params: action.params,
        load: true,
      };

    case type.LOADED_POST:
      return {
        ...state,
        load: false,
        data: action.data,
      };
    default:
      return state;
  }
};
