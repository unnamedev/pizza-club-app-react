import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {memo, useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"
/** ๐๐ป Styles */
import "./Sort.scss"

/**
 * Sort
 * @returns {JSX.Element}
 * @constructor
 */
const Sort = memo(({label, onSelectSortBy, currentSortBy}) => {
        /** ๐๐ป Hooks */
        const [isOpenPopup, setIsOpenPopup] = useState(false)
        const sortRef = useRef(null)

        useEffect(() => document.body.addEventListener("click", clickOutside), []);

        /** ๐๐ป Functions */
        const toggleSelector = () => setIsOpenPopup(!isOpenPopup)

        const clickOutside = (e) => {
            const path = e.path || (e.composedPath && e.composedPath())
            if (!path.includes(sortRef.current)) {
                setIsOpenPopup(false)
            }
        }

        const clickElementHandler = (idx) => {
            onSelectSortBy(idx)
            setIsOpenPopup(false)
        }

        /** ๐๐ป Render */
        return <div className="sort" ref={sortRef}>

            <p className="sort__label">
                {isOpenPopup ?
                    <IoMdArrowDropup color="#2C2C2C" size={20}/> :
                    <IoMdArrowDropdown color="#2C2C2C" size={20}/>
                }
                ะกะพััะธัะพะฒะบะฐ ะฟะพ:
                <span
                    className="sort__label-active"
                    onClick={toggleSelector}
                >{label.find(o => o.type === currentSortBy).name}</span>
            </p>

            <ul className={`sort__list ${isOpenPopup ? "sort__list--active" : ""}`}>
                {label.map((o, idx) =>
                    <li
                        key={idx}
                        className={`sort__list-item ${currentSortBy === o.type ? "active" : ""}`}
                        onClick={() => clickElementHandler(o)}
                    >{o.name}</li>
                )}
            </ul>
        </div>
    }
)

/** ๐๐ป Check props */
Sort.propTypes = {
    label: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Sort
