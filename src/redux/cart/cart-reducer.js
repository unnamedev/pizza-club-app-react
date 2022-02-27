import {ADD_ITEM, CLEAR_ITEMS, DECREASE_ITEM, INCREASE_ITEM, REMOVE_ITEM} from "./cart-actions"
import _ from "lodash"

/** 👋🏻 Initial State */
const initialState = {
    items: {},
    itemsCount: 0,
    itemsPrice: 0,
}

/** 👋🏻 Reducer */
export const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        /** 👋🏻 ADD ITEMS */
        case ADD_ITEM: {
            const formedItems = !state.items[payload.id] ? [payload] : [...state.items[payload.id].items, payload]
            const items = {
                ...state.items,
                [payload.id]: {
                    items: formedItems,
                    totalPrice: _.sumBy(formedItems, "price")
                }
            }
            const itemsPrice = _.sumBy(_.values(items), "totalPrice")
            const itemsCount = _.values(items).reduce((a, p) => p.items.length + a, 0)

            return {
                ...state,
                items,
                itemsCount,
                itemsPrice
            }
        }
        /** 👋🏻 REMOVE ITEM */
        case REMOVE_ITEM: {
            const copyItems = JSON.parse(JSON.stringify(state.items))
            const currentTotalPrice = copyItems[payload].totalPrice
            const currentTotalCount = copyItems[payload].items.length
            delete copyItems[payload]

            return {
                ...state,
                items: copyItems,
                itemsPrice: state.itemsPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentTotalCount
            }
        }
        /** 👋🏻 INCREASE ITEM */
        case INCREASE_ITEM: {
            const newObjItems = [...state.items[payload].items, state.items[payload].items[0]]
            const newItems = {
                ...state.items,
                [payload]: {
                    items: newObjItems,
                    totalPrice: _.sumBy(newObjItems, "price"),
                }
            }
            const itemsPrice = _.sumBy(_.values(newItems), "totalPrice")
            const itemsCount = _.values(newItems).reduce((a, p) => p.items.length + a, 0)

            return {
                ...state,
                items: newItems,
                itemsCount,
                itemsPrice,
            }
        }
        /** 👋🏻 DECREASE ITEM */
        case DECREASE_ITEM: {
            const oldItems = state.items[payload].items
            const newObjItems = oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems
            const newItems = {
                ...state.items,
                [payload]: {
                    items: newObjItems,
                    totalPrice: _.sumBy(newObjItems, "price"),
                },
            }
            const itemsPrice = _.sumBy(_.values(newItems), "totalPrice")
            const itemsCount = _.values(newItems).reduce((a, p) => p.items.length - a, 0)

            return {
                ...state,
                items: newItems,
                itemsCount,
                itemsPrice,
            }
        }
        /** 👋🏻 CLEAR ITEMS */
        case CLEAR_ITEMS:
            return {
                ...state,
                items: {},
                itemsCount: 0,
                itemsPrice: 0,
            }

        default:
            return state
    }
}