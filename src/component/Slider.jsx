import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import img1 from '../img/toa-heftiba-FV3GConVSss-unsplash.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/spacejoy-RqO6kwm4tZY-unsplash.jpg'


function Slider() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div className="all-carousel">
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img src={img1} alt="frist img" className='slider_img' />
                    <Carousel.Caption className={`animated-text-container ${animate ? 'animate' : ''}`}>
                        <p className='p-1'>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        <h2>SELECT BEST FURNITUR FOR YOUR FAMILY</h2>
                        <h2>INTRIOR DESIGN</h2>
                        <div className='mar'></div>
                        <a href='h' className='button-view-1'>VIEW MORE</a>
                        <a href='h' className='button-shop-1'>TO SHOP</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={img2} alt="" className='slider_img' />
                    <Carousel.Caption className={`animated-text-container ${animate ? 'animate' : ''}`}>
                        <p className='p-2'>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        <h2>WE CREATE AMAZING ARCHITECTURE DESIGN</h2>
                        <h2>CLASSIC INTRIORS</h2>
                        <div className='mar'></div>
                        <a href='h' className='button-view-2'>VIEW MORE</a>
                        <a href='h' className='button-shop-2'>TO SHOP</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className='slider_img' />
                    <Carousel.Caption className={`animated-text-container ${animate ? 'animate' : ''}`}>
                        <p className='p-3'>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        <h2>SELECT BEST FURNITUR FOR YOUR FAMILY</h2>
                        <h2>INTRIOR DESIGN</h2>
                        <div className='mar'></div>
                        <a href='h' className='button-view-3'>VIEW MORE</a>
                        <a href='h' className='button-shop-3'>TO SHOP</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    )
}

export default Slider
