import React from 'react'
import './textheader.css'
function TextHeader({header}) {
  return (
    <div>
      <h2 className='header'>{header}</h2>
    </div>
  )
}

export default TextHeader
