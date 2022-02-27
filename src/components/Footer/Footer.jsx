import {Link} from "react-router-dom"
import {memo} from "react"
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter} from "react-icons/fa"
/** 👋🏻 Styles */
import "./Footer.scss"

/**
 * Footer
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = memo((() => {
    /** 👋🏻 Functions */
    const handleScrollTop = () => window.scroll({top: 0, left: 0, behavior: 'smooth'})

    /** 👋🏻 Render */
    return <footer className="footer">
        <div className="footer__row footer__row--top">
            <div className="container">
                <button className="footer__up" onClick={handleScrollTop}>
                    ↑ Наверх
                </button>
            </div>
        </div>
        <div className="footer__row footer__row--bottom container">
            <ul className="footer__menu">
                <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Для ресторанов</Link></li>
                <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Курьерам</Link></li>
                <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Пресс-центр</Link></li>
                <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Условия акций</Link></li>
                <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Контакты</Link></li>
            </ul>
            <div className="footer__social">
                <p className="footer__social-text">Присоединяйтесь к нам</p>
                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <Link to="/" className="footer__social-link">
                            <span className="visually-hidden">Twitter</span>
                            <FaTwitter size={20}/>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link to="/" className="footer__social-link">
                            <span className="visually-hidden">Facebook</span>
                            <FaFacebookF size={20}/>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link to="/" className="footer__social-link">
                            <span className="visually-hidden">Instagram</span>
                            <FaInstagram size={20}/>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link to="/" className="footer__social-link">
                            <span className="visually-hidden">Telegram</span>
                            <FaTelegramPlane size={20}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}))

export default Footer
