import {SET_CATEGORY, SET_SORT} from "./filter-actions"

/** 👋🏻 Initial State */
const initialState = {
    category: null,
    sortBy: {
        type: "popular",
        order: "desc"
    }
}

/** 👋🏻 Reducer */
export const filtersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        /** 👋🏻 SET SORT */
        case SET_SORT:
            return {
                ...state,
                sortBy: payload
            }
        /** 👋🏻 SET CATEGORY */
        case SET_CATEGORY:
            return {
                ...state,
                category: payload
            }
        default :
            return state
    }
}