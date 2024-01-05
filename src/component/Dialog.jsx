import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { productData } from './productlist'
import './dialog.css'
import img from '../img/home2.jpg'
import InputCount from './InputCount'
import ButtonCard from './ButtonCard'
import { GrFormClose } from "react-icons/gr";
const Dialog = ({ open }) => {
    const [isOpen, setIsOpen] = useState({ open });

    const closeDialog = () => {
        setIsOpen(false);
    };
    let { id } = useParams();
    let getProducts = () => {
        return productData.filter((product) => product.id == id)[0];
    }
    let pro = getProducts();

    return (
        <div>

            {isOpen && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <button onClick={closeDialog} className="close-button">
                            <GrFormClose className="close-icon" />
                        </button>
                        <div className="specific">
                            <div className="quick-img">
                                <img src={pro?.imageurl} alt="" />
                            </div>
                            <div className='quick-details'>
                                <p className="quick-title">{pro?.name}</p>
                                <p className="quick-price">{pro?.price}</p>
                                <p className="quick-description">Augue consequat placerat ante porttitor luctus ultricies parturient
                                    parturient sit a scelerisque iaculis vestibulum a facilisi ornare egestas mauris. A scelerisque non vitae parturient
                                    in suscipit mus conubia cum mi sapien scelerisque a ultricies.</p>
                                <div className="input-button">
                                    <div className="contain-input"><InputCount /></div>
                                    <ButtonCard></ButtonCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dialog;
