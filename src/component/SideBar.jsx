import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartData } from './CartAdded'
import SideCart from './SideCart';
function SideBar({ show, handleClose,counter }) {
    const navigate = useNavigate();
    const go_to_cart=()=>{
        navigate(`/cart`,{counter});
    }
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {cartData.map((product,id) => {
                            return <SideCart key={id} product={product} counter={counter}/>
                        })}
                        <button className='view-cart' onClick={go_to_cart} >View Cart</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default SideBar
