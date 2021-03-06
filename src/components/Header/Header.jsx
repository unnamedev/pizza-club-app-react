import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {RiShoppingBasketLine} from "react-icons/ri"
/** ππ» Styles */
import "./Header.scss"

/**
 * Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    /** ππ» Hooks */
    const {itemsCount} = useSelector(({cart}) => cart)
    /** ππ» Render */
    return <header className="header">
        <nav className="header__nav">
            <Link className="header__logo" to="/">
                <img className="header__logo-ico" src="./images/logo.png" alt="Pizza"/>
            </Link>
            <Link to="/cart" className="header__cart">
                <div className="header__cart-ico">
                    <RiShoppingBasketLine size={20}/>
                    <span className={`header__cart-count ${itemsCount >= 10 ? "big" : ""}`}>{itemsCount}</span>
                </div>
                <span className="header__cart-label">ΠΠΎΡΠ·ΠΈΠ½Π°</span>
            </Link>
        </nav>
    </header>
}

export default Header
