import {useEffect, useState} from "react"
/** 👋🏻 Styles */
import "./Preloader.scss"

/**
 * Preloader
 * @returns {JSX.Element}
 * @constructor
 */
const Preloader = () => {
    /** 👋🏻 Hooks */
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        document.body.style.overflowY = showPreloader ? "hidden" : "unset"
    }, [showPreloader])

    setTimeout(() => setShowPreloader(false), 2000)

    /** 👋🏻 Render */
    return <div className={`preloader ${showPreloader ? "is-show" : ""}`}>
        <img className="preloader__image" src="./images/preloader.jpg" alt="Pizza Club"/>
        <div className="dot-flashing"/>
        <p className="preloader__text">Подготавливаем пиццы</p>
    </div>
}

export default Preloader
