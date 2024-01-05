import React,{useState} from 'react'
import { CarouselItem } from './CarouselItem'
import { VscCircleLarge } from "react-icons/vsc";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import './carousel.css'
function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "Lamb",
            description:"Retail",
            price:173,
            image: require("../img/home2.jpg"),
        },
        {
            title: "Floor Lamp",
            description:"Retail",
            price:118,
            image: require("../img/home1.jpg"),
        },
        
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = items.length - 1;
            console.log(newIndex)
        } else if (newIndex >= items.length) {
            newIndex = 0;
            console.log(newIndex)
        }
        setActiveIndex(newIndex);
    };
    return (
        
            <div className="bb">
                <div className="carouselx">
            <div className="text">
                <h2 className='caro-title'>MOST POPULAR</h2>
                <p>Cum cubilia ac fringilla loremquis himenaeos velit.</p>
            </div>
            <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => {
                    return <CarouselItem item={item}  />;
                })}
            </div>
            <div className="carousel-buttons">
                <button className="button-arrow-1" onClick={() => { updateIndex(activeIndex - 1); }}>
                    <span className="material-symbols-outlined">
                        <SlArrowLeft className='arrow'/>
                    </span>
                </button>
                <div className="indicators">
                    {items.map((item, index) => {
                        return (
                            <button className="indicator-buttons" onClick={() => { updateIndex(index) }}>
                                <span  >
                                {index === activeIndex ? <VscCircleLargeFilled className='carousel-circle-filled'/> : <VscCircleLarge className='carousel-circle'/>}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button className="button-arrow-2" onClick={() => { updateIndex(activeIndex + 1); }}>
                    <span className="material-symbols-outlined"><SlArrowRight className='arrow'/></span>
                </button>
            </div>
        </div>
            </div>
        
    )
}

export default Carousel

