import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {store} from "./redux"

/** 👋🏻 Components */
import Root from "./Root"

/** 👋🏻 Styles */
import "./styles/index.scss"

/** 👋🏻 Render Components */
render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root")
)
