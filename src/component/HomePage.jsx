import React from 'react'
import Slider from './Slider'
import HomeImage from './HomeImage'
import Decore from './Decore'
import ProductCarousel from './ProductCarousel'
import TextHeader from './TextHeader'
function HomePage() {
    return (
        <div>
            <Slider></Slider>
            <Decore></Decore>
            <HomeImage></HomeImage>
            <TextHeader header="Featured Products"></TextHeader>
            <ProductCarousel></ProductCarousel>
        </div>
    )
}

export default HomePage
