import React from 'react'

import styles from './styles.module.css'

export function Button() {
  return (
    <button 
      type="submit" 
      className={styles.button}>
      Adicionar tarefa
    </button>
  )
}
