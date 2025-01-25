import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='Button'>
       <button className="btn">{props.buttons}</button>
    </div>
  )
}
export default Button