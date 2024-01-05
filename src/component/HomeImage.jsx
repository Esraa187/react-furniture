import React, { useState } from 'react'
import Carousel from './Carousel';
import img3 from '../img/home3.jpg'
import './homeImage.css'
import Circle from './Circle';
import CardHover from './CardHover';
import CardHover2 from './CardHover2';
import QuickView from './QuickView';
function HomeImage() {
    const [appear, setAppear] = useState("card-frist-dis")
    const [appear_sec, setAppear_sec] = useState("card-second-dis")
    const card_appear = () => {
        setAppear("card-frist")
    }
    const card_disappear = () => {
        setAppear("card-frist-dis")
    }
    const card_appear_sec = () => {
        setAppear_sec("card-second")
    }
    const card_disappear_sec = () => {
        setAppear_sec("card-second-dis")
    }
    return (
        <div className='contain'>
            <div className="full-image">
                <img src={img3} alt="img3" />
                <div className='frist-circle' onMouseEnter={card_appear} onMouseLeave={card_disappear}>
                    <Circle />
                </div>
                <div className='second-circle' onMouseEnter={card_appear_sec} onMouseLeave={card_disappear_sec}>
                    <Circle />
                </div>
                <div className={appear}>
                    <CardHover />
                </div>
                <div className={appear_sec}>
                    <CardHover2 />
                </div>
                
            </div>
            <div className="details">
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default HomeImage
