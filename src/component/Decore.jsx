import React from 'react'
import './decore.css'
import decore1 from '../img/banner-4.jpg'
import decore2 from '../img/banner-5.jpg'
import DecoreButton from './DecoreButton'

function Decore() {
    return (
        <div className='decore'>
            <div className="decore1">
                <img src={decore1} alt="" />
                <p className='decore-text'>WALL PAINTING</p>
                <div className="button-decore"><DecoreButton/></div>
            </div>
            <div className="decore2">
            <img src={decore2} alt="" className="decore2"/>
                <p className='decore-text'>HANGING LIGHT</p>
                <div className="button-decore"><DecoreButton/></div>
            </div>

        </div>
    )
}

export default Decore
