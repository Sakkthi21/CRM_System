import React from 'react'
import './styles.css'

function Button({id, text, onClick}) {
  return (
    <div id={id} onClick={onClick} className="custom-btn">
      {text}
    </div>
  )
}

export default Button
