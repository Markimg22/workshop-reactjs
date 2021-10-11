import React from 'react'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <form action="" className={styles.form}>
        <Input />
        <Button />
      </form>
    </div>
  )
}
