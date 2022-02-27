import PropTypes from "prop-types"
/** 👋🏻 Components */
import {Button} from "../index"
/** 👋🏻 Styles */
import "./Categories.scss"
import {memo} from "react";

/**
 * Categories
 * @returns {JSX.Element}
 * @constructor
 */
const Categories = memo(({label, onSelectCategory, currentCategory}) =>
    <ul className="categories">
        <li>
            <Button
                third
                onClick={() => onSelectCategory(null)}
                className={currentCategory === null ? "active" : ""}
            >Все</Button>
        </li>

        {label.map((i, idx) =>
            <li key={idx}>
                <Button
                    third
                    onClick={() => onSelectCategory(idx)}
                    className={idx === currentCategory ? "active" : ""}
                >{i}</Button>
            </li>
        )}
    </ul>
)

/** 👋🏻 Check props */
Categories.propTypes = {
    label: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectCategory: PropTypes.func,
}

export default Categories
