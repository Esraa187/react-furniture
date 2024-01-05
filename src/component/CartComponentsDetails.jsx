import React, { useState } from 'react'
import './cartcomponent.css'
function CartComponentsDetails({ product }) {
    const [inpcount, setInpCount] = useState(1)
    const increamnt = () => {
        setInpCount(inpcount + 1)
    }
    const decreamnt = () => {
        if (inpcount === 1) {
            setInpCount(1)
        } else {
            setInpCount(inpcount - 1)
        }
    }
    return (
        <div className='all-component'>
            <div className="products">
                <div className="merge">
                    <img src={product.imageurl} alt="" className='cart-comp-img'/>
                    <p>{product.name}</p>
                </div>
            </div>
            <div className="all-price">
                <p>{product.price}</p>
            </div>
            <div className="quintity">
                <button className='increamnt' onClick={increamnt}>+</button>
                <input value={inpcount} onChange={e => setInpCount(e.target.value)} className='form-inp' />
                <button className='decreamnt' onClick={decreamnt}>-</button>
            </div>
            <div className="subtotal">
                <p>not yet</p>
            </div>
        </div>
    )
}

export default CartComponentsDetails
