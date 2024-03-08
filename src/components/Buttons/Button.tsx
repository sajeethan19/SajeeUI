import React from 'react';
import "./Button.css"

export interface BtnProps{
  label:string
}

function Button(props:BtnProps) {

  return (
    <div>
        <button className='SajeeBtn glass-blue'>{props.label}</button>
    </div>
  )
}

export default Button