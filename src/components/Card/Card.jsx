import classNames from "classnames"
import React, {useState} from "react"
/** 👋🏻 Components */
import {Button} from "../index"
/** 👋🏻 Data */
import {cardData} from "./data"
/** 👋🏻 Styles */
import "./Card.scss"
import PropTypes from "prop-types";

/**
 * Card
 * @param id
 * @param imageUrl
 * @param name
 * @param types
 * @param sizes
 * @param price
 * @param onAddToCart
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({id, imageUrl, name, types, sizes, price, onAddToCart, itemsInCount}) => {
    /** 👋🏻 Hooks */
    const [currentType, setCurrentType] = useState(types[0])
    const [currentSize, setCurrentSize] = useState(sizes[0])
    /** 👋🏻 Functions */
    const onSelectSize = (idx) => setCurrentSize(idx)
    const onSelectType = (idx) => setCurrentType(idx)
    const handleAddClick = () => onAddToCart({
        id,
        name,
        imageUrl,
        price,
        type: cardData.types[currentType],
        size: cardData.sizes[cardData.sizes.indexOf(currentSize)]
    })
    /** 👋🏻 Render */
    return <li className="card">
        <div className="card__top">
            {itemsInCount[id] && itemsInCount[id].items.length !== 0 &&
                <span className="card__top-count">
                    {itemsInCount[id].items.length}
                </span>
            }
            <img src={imageUrl} alt={name} className="card__image"/>
        </div>
        <div className="card__name">{name}</div>
        <div className="card__options">
            <ul className="card__types card__options-list">
                {cardData.types.map((o, i) =>
                    <li
                        key={o}
                        className={classNames("card__types-item card__options-item", {
                            "active": currentType === i,
                            "disabled": !types.includes(i)
                        })}
                        onClick={() => onSelectType(i)}
                    >{o}</li>
                )}
            </ul>
            <ul className="card__sizes card__options-list">
                {cardData.sizes.map((o, i) =>
                    <li
                        key={o}
                        className={classNames("card__sizes-item card__options-item", {
                            "active": currentSize === o,
                            "disabled": !sizes.includes(o)
                        })}
                        onClick={() => onSelectSize(o)}
                    >{o} см.</li>
                )}
            </ul>
        </div>
        <div className="card__footer">
            <p className="card__price">от {price} ₽</p>
            <Button className="card__button" secondary onClick={handleAddClick}>Добавить</Button>
        </div>
    </li>
}

/** 👋🏻 Check props */
Card.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func
}

/** 👋🏻 Default props */
Card.defaultProps = {
    imageUrl: "#",
    name: "PizzaDefault",
    price: 0,
    types: [0, 1],
    sizes: [26, 30, 40],
}

export default Card
