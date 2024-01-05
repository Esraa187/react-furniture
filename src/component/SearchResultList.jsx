import React from 'react'
import SearchResult from './SearchResult'
function SearchResultList({ result }) {
    return (
        <div className="results-list">
            {result.map((result, id) => {
                return <SearchResult result={result.title} key={id} />

            })}
        </div>
    )
}

export default SearchResultList
