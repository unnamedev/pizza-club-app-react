import {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
/** 👋🏻 Render Components */
import {Card, CardMockup, Categories, Sort} from "../../components"
/** 👋🏻 Data */
import {homePageData} from "./data"
/** 👋🏻 Styles */
import "./HomePage.scss"
/** 👋🏻 Methods */
import {getItems} from "../../redux/products/product-actions"
import {filtersActions} from "../../redux/filters/filter-actions"
import {cartActions} from "../../redux/cart/cart-actions"

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
const HomePage = () => {
    /** Hooks */
    const dispatch = useDispatch()
    const {items: products, status} = useSelector(({products}) => products)
    const {category: currentCategory, sortBy} = useSelector(({filters}) => filters)
    const {items: itemsInCount} = useSelector(({cart}) => cart)
    useEffect(() => dispatch(getItems(currentCategory, sortBy)), [currentCategory, dispatch, sortBy])

    /** Functions */
    const onSelectCategory = useCallback((id) => dispatch(filtersActions.setCategory(id)), [dispatch])
    const onSelectSortBy = useCallback((value) => dispatch(filtersActions.setSort(value)), [dispatch])
    const onAddToCart = useCallback((value) => dispatch(cartActions.addItem(value)), [dispatch])

    /** Render */
    return <div className="home">
        <div className="home__top container">
            <Categories
                label={homePageData.categories}
                onSelectCategory={onSelectCategory}
                currentCategory={currentCategory}
            />
            <Sort
                label={homePageData.sort}
                onSelectSortBy={onSelectSortBy}
                currentSortBy={sortBy.type}
            />
        </div>
        <div className="container">
            <h2 className="title">Пицца
                {`${currentCategory !== null ? `: ${homePageData.categories[currentCategory]}` : ""}`}
            </h2>
            <ul className="grid home__grid">
                {status ?
                    Array.from(Array(10).keys()).map(i => <CardMockup key={i}/>) :
                    products.map(o => <Card key={o.id} {...o} itemsInCount={itemsInCount} onAddToCart={onAddToCart}/>)
                }
            </ul>
        </div>
    </div>
}

export default HomePage
