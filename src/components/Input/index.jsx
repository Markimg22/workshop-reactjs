import React from 'react'

import './styles.css'

export function Input(props) {
  return (
    <input 
      className="input"
      type={props.type} 
      placeholder={props.placeholder}
    />
  )
}
