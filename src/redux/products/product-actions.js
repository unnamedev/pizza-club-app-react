import axios from "axios"

/** 👋🏻 Constants */
export const FETCH_ITEMS = "@@products/FETCH_ITEMS"
export const SET_LOADING = "@@products/SET_LOADING"
export const SET_ERROR = "@@products/SET_ERROR"

/** 👋🏻 Actions */
export const productsActions = {
    setItems: payload => ({type: FETCH_ITEMS, payload}),
    setLoading: payload => ({type: SET_LOADING, payload}),
    setError: payload => ({type: SET_ERROR, payload}),
}

export const getItems = (category, sortBy) => async (dispatch) => {
    const BASE_URL = "https://621bc88d768a4e10209c80cb.mockapi.io/pizzas"
    dispatch(productsActions.setLoading(true))

    try {
        const {data} = await axios.get(`${BASE_URL}?${category !== null ? `category=${category}` : ""}`, {
            params: {
                sortBy: sortBy.type,
                order: sortBy.order
            },
            headers: {
                "Content-type": "application/json"
            }
        })
        console.log(data)
        dispatch(productsActions.setItems(data))
        dispatch(productsActions.setLoading(false))
    } catch (e) {
        dispatch(productsActions.setError(e.message))
    }
}