import * as type from '../../constants'

const initialState = {
    load: true,
    data: {}
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_CATEGORIES_REQUEST:      
            return {
                ...state,
                load: true
            };

        case type.GET_ALL_CATEGORIES_COMPLETE:
            return {
                ...state,
                load: false,
                data: action.data
            };

        default:
            return state;
    }
}