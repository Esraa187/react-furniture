import React from 'react'
import './productpage.css'
import {productData,} from './productlist'
import ProductPageDetails from './ProductPageDetails'
function ProductPage() {
    const product= productData.map((item) => (<ProductPageDetails key={item.id} item={item}/>))
    return (
        <div className='product-flex'>
            {product}
        </div>
    )
}

export default ProductPage

