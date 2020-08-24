import React from 'react'
import cat from './Cat.png'

export default function FoodCard() {
    const [showBorder, setShowBorder] = React.useState(false);

    const handleMouseEnter = () => {
        setShowBorder(true);
    }

    const handleMouseLeave = () => {
        setShowBorder(false);
    }

    return (
        <>
            <div className="foodcard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="food__back" style={{display: showBorder? 'block' : 'none'}}></div>
                <div className="food__weigth">
                    <p>0,5</p>
                    <span>КГ</span>
                </div>
                <div className="food__cat">
                    <img src={cat} alt="cat" />
                </div>
                <div className="food__description">
                    <h4>Сказачное заморское явство</h4>
                    <h2>Нямушка</h2>
                    <h3>с рыбой</h3>
                    <h5>
                        <b>10</b> порций
                        <p>мышь в подарок</p>
                    </h5>
                </div>
            </div>
            <span className="caption">Че сидишь? Порадуй коте, <a href="/">купи.</a></span>
        </>
    )
}
