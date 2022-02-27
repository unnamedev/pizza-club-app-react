/** 👋🏻 Constants */
export const SET_SORT = "@@filters/SET_SORT"
export const SET_CATEGORY = "@@filters/SET_CATEGORY"

/** 👋🏻 Actions */
export const filtersActions = {
    setSort: payload => ({type: SET_SORT, payload}),
    setCategory: payload => ({type: SET_CATEGORY, payload})
}