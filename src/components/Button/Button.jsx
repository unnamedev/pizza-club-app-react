import classNames from "classnames"
import PropTypes from "prop-types"
/** 👋🏻 Styles */
import "./Button.scss"

/**
 * Button
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({children, className, primary, secondary, third, onClick}) =>
    <button
        onClick={onClick}
        className={classNames("button", className, {
            "button--primary": primary,
            "button--secondary": secondary,
            "button--third": third,
        })}
    >{children}</button>

/** 👋🏻 Check props */
Button.propTypes = {
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    third: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button
