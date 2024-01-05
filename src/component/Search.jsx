import React, { useState } from 'react'
import data from '../Data.json'
function Search({ setResult }) {
    const [input, setInput] = useState("");
    
    const fetchData = (value) => {
        const result = data.filter((val) => {
            return val &&
                val.title &&
                val.title.toLowerCase().includes(value);
        })
        if(value===""){
            setResult([])
        }else{
            setResult(result)
        }
        
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div>
            <h4>What are you looking for ?</h4>
            <input type="text" className='input-search'
                placeholder='Search products...'
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default Search
