/** 👋🏻 Constants */
export const ADD_ITEM = "@@cart/ADD_ITEM"
export const REMOVE_ITEM = "@@cart/REMOVE_ITEM"
export const INCREASE_ITEM = "@@cart/INCREASE_ITEM"
export const DECREASE_ITEM = "@@cart/DECREASE_ITEM"
export const CLEAR_ITEMS = "@@cart/CLEAR_ITEMS"

/** 👋🏻 Actions */
export const cartActions = {
    addItem: payload => ({type: ADD_ITEM, payload}),
    removeItem: payload => ({type: REMOVE_ITEM, payload}),
    increaseItem: payload => ({type: INCREASE_ITEM, payload}),
    decreaseItem: payload => ({type: DECREASE_ITEM, payload}),
    clearItems: () => ({type: CLEAR_ITEMS})
}