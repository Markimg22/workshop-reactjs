import React from 'react'

import styles from './styles.module.css'

export function Header(props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {props.title}
      </h1>
    </header>
  )
}
