import React, { useState } from 'react'
import { GrFormClose } from "react-icons/gr";
import './sidecart.css'
function SideCart({ product,counter }) {
    const [inpcount, setInpCount] = useState(1)
    const [count, setCount] = useState(counter)

    const increamnt = () => {
        setInpCount(inpcount + 1)
        setCount(count+1)
    }
    const decreamnt = () => {
        if (inpcount === 1) {
            setInpCount(1)
            setCount(1)
        } else {
            setInpCount(inpcount - 1)
            setCount(count-1)
        }
    }
    return (
        <div className='side-cart'>
            <img src={product.imageurl} alt="" className='side-img'/>
            <div className="cart-details">
                <p className='side-text'>{product.name}</p>
                <div>
                    <p>{count}</p>
                    <button className='increamnt' onClick={increamnt}>+</button>
                    <input value={inpcount} onChange={e => setInpCount(e.target.value)} className='form-inp' />
                    <button className='decreamnt' onClick={decreamnt}>-</button>
                </div>
                <p className='side-price'>{product.price}</p>
            </div>
            <GrFormClose  />
        </div>
    )
}

export default SideCart
