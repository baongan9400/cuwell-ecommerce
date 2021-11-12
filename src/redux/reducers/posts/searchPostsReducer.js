import * as type from '../../constants'

const initialState = {
    params: {
        search: '',
        category: '',
        page: 1,
        page_size: 18,
    },
    load: true,
    data: {}
};
export const searchPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOAD_POST:
            return {
                ...state,
                params : action.params,
                load: true,
            };

        case type.LOADED_POST:
            const { data } = action.data;
            return {
                ...state,
                load: false,
                data: data,
            };
        default:
            return state;
    }
}