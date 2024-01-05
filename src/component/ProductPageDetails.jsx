import React, { useState,useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import './product.css'
import { RiEyeLine } from "react-icons/ri";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import {cartData} from './CartAdded'
import SideBar from './SideBar';
import {CounterContext} from '../context/CounterContext'

function ProductPageDetails({item}) {
    const [fill, setFill] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const {counter,setCounter}=useContext(CounterContext);
    const fill_icon = () => {
        setFill(true)
    }
    const un_fill_icon = () => {
        setFill(false)
    }
    const navigate = useNavigate();
    const openDetails = () => {
        navigate(`/details/${item.id}`);
    }
    const quickView=()=>{
        navigate(`/quickview/${item.id}`);
    }
    const handleShow = (item) => {
        setShow(true)
        cartData.push(item)
        console.log(cartData)
        setCounter(counter+1)
    };
    return (
        <div className='product-card product-card-details'>
            <img src={item.imageurl} alt="" className='product-img' onClick={openDetails} />
            <div className="product-details">
                <p className='product-name'>{item.name}</p>
                <p className='product-price'>{item.price}</p>
            </div>
            <button className='product-button' onClick={()=>handleShow(item)}>Add To Cart</button>
            <SideBar show={show} handleClose={handleClose} counter={1}/>
            <div className="icons-product">
                {fill ? <VscHeartFilled className='icon-pro' onClick={un_fill_icon} /> : <VscHeart className='icon-pro' onClick={fill_icon} />}
                <RiEyeLine className='icon-pro' onClick={quickView} />
                
            </div>
        </div>
    )
}

export default ProductPageDetails
