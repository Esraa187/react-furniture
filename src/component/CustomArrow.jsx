import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
function CustomArrow({ onClick, direction }) {
    return (
        <div onClick={onClick} className={`custom-arrow ${direction}`}>
            {direction === 'prev' ? <GoArrowLeft/> : <GoArrowRight/>}
        </div>
    )
}

export default CustomArrow
