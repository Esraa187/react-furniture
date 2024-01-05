import React,{useState} from 'react'
import './inputcount.css'
function InputCount() {
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
    return (
        <div>
            <button className='increamnt' onClick={increamnt}>+</button>
            <input value={inpcount} className='form-inp'/>
            <button className='decreamnt'onClick={decreamnt}>-</button>
        </div>
    )
}

export default InputCount
