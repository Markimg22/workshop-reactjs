import React from 'react'

import './styles.css'

export function Header(props) {
  return (
    <header className="container-header">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
    </header>
  )
}
