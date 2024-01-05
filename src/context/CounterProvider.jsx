import React,{useState} from 'react'
import {CounterContext} from "./CounterContext"
function CounterProvider(props) {
    const[counter,setCounter]=useState(0)
    
    return (
        <CounterContext.Provider value={{counter,setCounter}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterProvider


