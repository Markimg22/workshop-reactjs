import React from 'react'

import styles from './styles.module.css'

export function Button(props) {
  return (
    <button 
      type={props.type}
      className={styles.button}>
      {props.title}
    </button>
  )
}
