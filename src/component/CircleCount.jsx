import React,{useContext} from 'react'
import './circlecount.css'
import {CounterContext} from '../context/CounterContext'
function CircleCount() {
    const {counter}=useContext(CounterContext);
    return (
        <div className='circle-count'>
            {counter}
        </div>
    )
}

export default CircleCount
