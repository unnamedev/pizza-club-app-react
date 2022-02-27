import {combineReducers} from "redux"
import {productsReducer as products} from "./products/product-reducer"
import {filtersReducer as filters} from "./filters/filter-reducer"
import {cartReducer as cart} from "./cart/cart-reducer"

/** 👋🏻 Reducers */
export const rootReducer = combineReducers({
    products,
    filters,
    cart
})