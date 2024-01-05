import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productData } from './productlist'
import './details.css'
import InputCount from './InputCount';
import './inputcount.css'
import ProductCarousel from './ProductCarousel';
import TextHeader from './TextHeader';
import { CounterContext } from '../context/CounterContext'
import { cartData } from './CartAdded'
import SideBar from './SideBar';
function Details() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { counter, setCounter } = useContext(CounterContext);
  // inputcount
  const [inpcount,setInpCount]=useState(1)
    const increamnt = ()=>{
        setInpCount(inpcount+1)
    }
    const decreamnt = ()=>{
        if(inpcount===1){
            setInpCount(1)
        }else{
            setInpCount(inpcount-1)
        }
    }
  let { id } = useParams();
  let getProducts = () => {
    return productData.filter((product) => product.id == id)[0];
  }
  let pro = getProducts();

  const handleShow = (pro) => {
    setShow(true)
    cartData.push(pro)
    console.log(cartData)
    setCounter(counter + inpcount)
  };
  const navigate = useNavigate();
  const go_to_cart = () => {
    navigate(`/cart`);
  }
  return (
    <div>
      <div className="detail">
        <div className="detail-img">
          <img src={pro?.imageurl} alt="" />
        </div>
        <div className='detail-text'>
          <p className="detail-title">{pro?.name}</p>
          <p className="detail-price">{pro?.price}</p>
          <p className="quick-description">Augue consequat placerat ante porttitor luctus ultricies parturient
            parturient sit a scelerisque iaculis vestibulum a facilisi ornare egestas mauris. A scelerisque non vitae parturient
            in suscipit mus conubia cum mi sapien scelerisque a ultricies.</p>
          <div className="add-item">
          <div>
            <button className='increamnt' onClick={increamnt}>+</button>
            <input value={inpcount}  onChange={e => setInpCount(e.target.value)} className='form-inp'/>
            <button className='decreamnt'onClick={decreamnt}>-</button>
          </div>
            <button className='detail-button' onClick={() => handleShow(pro)}>Add To Cart</button>
            <SideBar show={show} handleClose={handleClose} counter={inpcount}/>
          </div>
          <br />
          <button className='buy-button ' onClick={go_to_cart}>Buy Now</button>

        </div>
      </div>
      <TextHeader header="Recently Viewed Products"></TextHeader>
      {/* <ProductCarousel /> */}
    </div>
  )
}

export default Details
