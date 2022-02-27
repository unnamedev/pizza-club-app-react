import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {CgTrash} from "react-icons/cg"
import {Link} from "react-router-dom"
import _ from "lodash"
/** 👋🏻 Actions */
import {cartActions} from "../../redux/cart/cart-actions"
/** 👋🏻 Components */
import {Button, CartSmall} from "../../components"
/** 👋🏻 Styles */
import "./CartPage.scss"

/**
 * CartPage
 * @returns {JSX.Element}
 * @constructor
 */
const CartPage = () => {
    /** 👋🏻 Hooks */
    const dispatch = useDispatch()
    const {items, itemsCount, itemsPrice} = useSelector(({cart}) => cart)
    const pizzasGroup = _.keys(items).map(k => items[k].items[0])

    /** 👋🏻 Functions */
    const onCartClean = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(cartActions.clearItems())
        }
    }
    const onRemoveItem = (id) => {
        if (window.confirm("Вы действительно хотите очистить товар?")) {
            dispatch(cartActions.removeItem(id))
        }
    }
    const onOrderItems = () => {
        alert("Спасибо за покупку! Мы свяжемся с вами в ближайшее время")
        dispatch(cartActions.clearItems())
    }
    const onIncreaseItem = (id) => dispatch(cartActions.increaseItem(id))
    const onDecreaseItem = (id) => dispatch(cartActions.decreaseItem(id))

    /** 👋🏻 Render */
    return <div className="cart-page container">
        {pizzasGroup.length === 0 ? (
            <div className="cart-page__empty">
                <h2 className="title">Корзина пуста</h2>
                <p className="cart-page__empty-text">
                    Вероятней всего, вы не заказывали ещё пиццу.
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <Link className="button button--third active" to="/">Вернуться назад</Link>
            </div>
        ) : (
            <>
                <div className="cart-page__top">
                    <h1 className="title">Корзина</h1>
                    <button className="cart-page__clean" onClick={onCartClean}>
                        <CgTrash/>
                        Очистить корзину
                    </button>
                </div>

                <ul className="cart-page__list">
                    {pizzasGroup.map((o, idx) =>
                        <li key={o.id}>
                            <CartSmall
                                totalPrice={items[o.id].totalPrice}
                                totalCount={items[o.id].items.length}
                                onRemoveItem={onRemoveItem}
                                onIncreaseItem={onIncreaseItem}
                                onDecreaseItem={onDecreaseItem}
                                {...o}
                            />
                        </li>
                    )}
                </ul>

                <div className="cart-page__info">
                    <p>Всего пицц: <span>{itemsCount} шт.</span></p>
                    <p>Сумма заказа: <span>{itemsPrice} ₽</span></p>
                </div>

                <div className="cart-page__links">
                    <Link className="button button--third active" to="/">Вернуться назад</Link>
                    <Button secondary onClick={onOrderItems}>Оплатить</Button>
                </div>
            </>
        )}
    </div>
}

export default CartPage
