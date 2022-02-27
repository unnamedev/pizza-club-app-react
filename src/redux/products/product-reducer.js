import {FETCH_ITEMS, SET_ERROR, SET_LOADING} from "./product-actions"

/** 👋🏻 Initial State */
const initialState = {
    items: [],
    error: null,
    status: true
}

/** 👋🏻 Reducer */
export const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        /** 👋🏻 FETCH ITEMS */
        case FETCH_ITEMS:
            return {
                ...state,
                items: payload,
                status: true,
                error: null
            }
        /** 👋🏻 SET LOADING */
        case SET_LOADING:
            return {
                ...state,
                status: payload
            }
        /** 👋🏻 SET ERROR */
        case SET_ERROR:
            return {
                ...state,
                error: payload,
            }
        default :
            return state
    }
}