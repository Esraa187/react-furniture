import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { RiEyeLine } from "react-icons/ri";
import './carouselitem.css'
export function CarouselItem({item}) {

    const[fill,setFill]=useState(false)
    const fill_icon=()=>{
        setFill(true)
    }
    const un_fill_icon=()=>{
        setFill(false)
    }
    return (
        <div className="carousel-itemx">
            <img className="carousel-imgx" src={item.image}  alt=""/>
            <div className="carousel-item-textx">{item.title}</div>
            <div className="carousel-item-decsriptionx">{item.description}</div>
            <div className="carousel-item-pricex">${item.price}.00</div>
            <div className='xiconsx'>
                {fill? <VscHeartFilled className='sub_iconx' onClick={un_fill_icon}/>:<VscHeart className='sub_iconx'onClick={fill_icon}/>}
                <RiEyeLine className='sub_iconx'/>
                <BsCart3 className='sub_iconx'/>
                
            </div>
            
        </div>
    )
}


