import React from 'react'
import { cartData } from './CartAdded'
import CartComponentsDetails from './CartComponentsDetails'
import './cartcomponent.css'
function CartComponents() {
    return (
        <div>
            <div className="titels-cart">
                <h3>Products</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Subtotal</h3>
            </div>
            {cartData.map((product,id) => {
                return <CartComponentsDetails key={id}product={product} />
            })}
        </div>
    )
}

export default CartComponents
