import React from 'react'

import './styles.css'

export function Button(props) {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
