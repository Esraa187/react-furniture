import React, { useState } from 'react'
import Search from './Search'
import SearchResultList from './SearchResultList'
import { GrFormClose } from "react-icons/gr";
import './search.css'   
function SearchBar({ isOpen, onClose }) {
    const [result, setResult] = useState([])
    if (!isOpen) {
        return null
    }
    return (
        <div className="search">
            <div className="search-contain">
                <button onClick={onClose} className="close-button">
                    <GrFormClose className="close-icon" />
                </button>
                <Search setResult={setResult} />
                <SearchResultList result={result} />
            </div>
        </div>
    )
}

export default SearchBar
