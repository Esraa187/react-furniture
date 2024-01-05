import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {productData,settings} from './productlist'
import Product from './Product';


function ProductCarousel() {
const product= productData.map((item) => (<Product key={item.id} item={item}/>))

    return (
        <div className="product-slider-container">
            <Slider {...settings}>
                {product}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
