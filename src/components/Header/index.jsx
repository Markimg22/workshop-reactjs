import React from 'react'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Crie sua lista de tarefas</h1>
    </header>
  )
}
