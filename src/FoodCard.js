import React, { useState } from 'react'
import cat from './Cat1.png'
import './FoodCard.scss'

export default function FoodCard({ taste, portion, weight,  soldout, gift, caption, customer }) {
    const [showBorder, setShowBorder] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleMouseEnter = () => {
        setShowBorder(true);
    }

    const handleMouseLeave = () => {
        setShowBorder(false);
    }

    const handleClick = () => {
        setSelected((selected) => !selected);
    }

    return (
        <div className="fooditem">
            <div
                className={`foodcard ${(selected) ? "selected" : ""} ${(soldout) ? "disable" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div className="food__back" style={{ display: showBorder ? 'block' : 'none' }}></div>
                <div className="food__weigth">
                    <p>{weight}</p>
                    <span>КГ</span>
                </div>
                <div className="food__cat">
                    <img src={cat} alt="cat" />
                </div>
                <div className="food__description">
                    <h4>Сказачное заморское явство</h4>
                    <h2>Нямушка</h2>
                    <h3>{taste}</h3>
                    <h5>
                        <b>{portion}</b> порций
                        <p>{gift} в подарок</p>
                        {customer && <p>заказчик доволен</p>}
                    </h5>
                </div>
            </div>
            <span className="caption">
                {(soldout) ? `Печалька, ${taste} закончился.` :
                    (selected) ? caption : (
                        <>
                            <>Че сидишь? Порадуй коте, </>
                            <a href="/">купи.</a>
                        </>
                    )
                }
            </span>
        </div>
    )
}
