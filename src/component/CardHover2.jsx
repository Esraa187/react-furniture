import React from 'react'
import hover1 from '../img/hover2.webp'
import './card.css'
import ButtonCard from './ButtonCard'
function CardHover2() {
    return (
        <div className='card'>
            <img src={hover1} alt="" />
            <div className="all-text">
                <h4 className="title">
                    Lamp
                </h4>
                <div className="description">
                    Venenatis suspendisse nisl a accumsan feugiat praesent vestibulum vestibulum venenatis in
                </div>
                <div className="price">${118}.00</div>
                <ButtonCard></ButtonCard>
            </div>
        </div>
    )
}

export default CardHover2
