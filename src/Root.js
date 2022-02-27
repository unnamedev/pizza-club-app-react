import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
/** 👋🏻 Render Components */
import {Footer, Header, Preloader} from "./components"
import {CartPage, HomePage, NotFoundPage} from "./pages"

/**
 * 👋🏻 App Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <Router>
        <Preloader/>
        <Header/>
        <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/cart" exact element={<CartPage/>}/>
            <Route path="/*" exact element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </Router>

export default Root
