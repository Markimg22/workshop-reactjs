import React from 'react'

import styles from './styles.module.css'

export function Button(props) {
  return (
    <button 
      type="submit" 
      className={styles.button} 
      onClick={props.onClick}>
      Adicionar tarefa
    </button>
  )
}
