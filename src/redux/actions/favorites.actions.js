import * as actionTypes from "./actionTypes";

export const addToFavoriteItem = (item) => {
    return {
        type: actionTypes.ADDTOFAVORITEITEMS,
        payload: item,
    };
};

export const removeFromFavoriteItems = (item) => {
    return {
        type: actionTypes.REMOVEFROMFAVORITEITEMS,
        payload: item,
    };
};
