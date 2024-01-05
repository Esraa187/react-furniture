import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlMagnifier } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import CircleCount from './CircleCount';
import { RiUserLine } from "react-icons/ri";
import './navbar.css'
import SignInOut from './SignInOut';
import SearchBar from './SearchBar';
function NavBar() {
    const [open,setOpen]=useState(false);
    const [open_s,setOpen_s]=useState(false);
    const handleClose=()=>{
        setOpen(false)
    }
    const sign = ()=>{
        setOpen(true)
    }
    const handleClose2=()=>{
        setOpen_s(false)
    }
    const search = ()=>{
        setOpen_s(true)
    }
    const navigate = useNavigate();
    const go_to_cart=()=>{
        navigate(`/cart`);
    }
    const ProductPage=()=>{
        navigate(`/ProductPage`);
    }
    const home=()=>{
        navigate(`/home`);
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className='navbar-logo'>React-Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="" onClick={home} className='navbar-text'>HOME</Nav.Link>
                        <Nav.Link href="" onClick={ProductPage} className='navbar-text'>SHOP</Nav.Link>
                        <Nav.Link href="#link" className='navbar-text'>PAGES</Nav.Link>
                        <Nav.Link href="#link" className='navbar-text'>BLOG</Nav.Link>
                        <Nav.Link href="#link" className='navbar-text'>BUY</Nav.Link>
                    </Nav>
                    <div className="collab">
                        <RiUserLine className='user' onClick={sign}/>
                        <SignInOut isOpen={open} onClose={handleClose}/>
                        <SlMagnifier className='search-icon' onClick={search} />
                        <SearchBar isOpen={open_s} onClose={handleClose2}/>
                        <VscHeart className='heart'></VscHeart>
                        <BsCart3 className='cart' onClick={go_to_cart}></BsCart3>
                        <div className="count-item">
                            <CircleCount />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
