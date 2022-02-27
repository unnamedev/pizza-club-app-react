import "./NotFoundPage.scss"
import {Link} from "react-router-dom";
import React from "react";

/**
 * NotFoundPage
 * @returns {JSX.Element}
 * @constructor
 */
const NotFoundPage = () =>
    <div className="not-found container">
        <div className="not-found__inner">
            <h2 className="title">Страница не найдена</h2>
            <p>Возможно ее не существует</p>
            <Link className="button button--third active" to="/">Вернуться назад</Link>
        </div>
    </div>

export default NotFoundPage
