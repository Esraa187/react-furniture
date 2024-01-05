import React,{useState} from 'react'
import './sign.css'
import { GrFormClose } from "react-icons/gr";
import img from '../img/sign-in.jpg'
function SignInOut({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="signdialog">
            <div className="sign-contain">
                <button onClick={onClose} className="close-button">
                    <GrFormClose className="close-icon" />
                </button>
                <img src={img} alt="" className='signimg' />
                <h3>Sign In</h3>
                <input type="text" className='input-sign' placeholder='Name *' />
                <input type="text" className='input-sign' placeholder='Password *'/>
                <button className='button-sign'>Sign In</button>
                <button className='button-sign' >Create An Account</button>
            </div>
        </div>
    )
}

export default SignInOut
