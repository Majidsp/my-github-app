import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    favoriteItems: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADDTOFAVORITEITEMS:
            return {
                ...state,
                favoriteItems: [...state.favoriteItems, { ...action.payload }],
            };
        case actionTypes.REMOVEFROMFAVORITEITEMS:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(
                    (item) => item.login !== action.payload.login
                ),
            };

        default:
            return state;
    }
};

export default favoritesReducer;
