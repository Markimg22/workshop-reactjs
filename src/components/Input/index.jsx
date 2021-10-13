import React from 'react'

import styles from './styles.module.css'

export function Input(props) {
  return (
    <input 
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
    />
  )
}
