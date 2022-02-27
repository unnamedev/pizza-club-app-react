import PropTypes from "prop-types"
import {AiOutlineCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"
/** 👋🏻 Styles */
import "./CartSmall.scss"

/**
 * CardCard
 * @returns {JSX.Element}
 * @constructor
 */
const CartSmall = ({
                       id,
                       imageUrl,
                       name,
                       size,
                       type,
                       totalPrice,
                       totalCount,
                       onRemoveItem,
                       onIncreaseItem,
                       onDecreaseItem
                   }) =>
    /** 👋🏻 Render */
    <div className="card-small">
        <div className="card-small__item card-small__desc">
            <img src={imageUrl} alt={name} className="card-small__image"/>
            <div className="card-small__about">
                <h3 className="card-small__title">{name}</h3>
                <p className="card-small__props">{type} тесто, {size} см.</p>
            </div>
        </div>
        <div className="card-small__item card-small__counter">
            <button className="card-small__counter-button" onClick={() => onIncreaseItem(id)}>
                <AiOutlinePlusCircle size={30}/>
            </button>
            <span>{totalCount}</span>
            <button className="card-small__counter-button" onClick={() => onDecreaseItem(id)}>
                <AiOutlineMinusCircle size={30}/>
            </button>
        </div>
        <div className="card-small__item">
            <p className="card-small__total">{totalPrice} ₽</p>
        </div>
        <button className="card-small__item card-small__delete" onClick={() => onRemoveItem(id)}>
            <AiOutlineCloseCircle size={30}/>
        </button>
    </div>

/** 👋🏻 Check props */
CartSmall.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    onRemoveItem: PropTypes.func,
    onIncreaseItem: PropTypes.func,
    onDecreaseIte: PropTypes.func
}

export default CartSmall
