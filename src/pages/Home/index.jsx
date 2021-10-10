import React from 'react'

import './styles.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <div className="container">
      <main className="content">
        <Header title="Crie seu currículo" description="Insera o nome de um usuário do GitHub para gerar seu currículo." />
        <form className="form">
          <Input type="text" placeholder="Insira o nome do usuário" />
          <Button type="submit" text="Gerar currículo" />
        </form>
      </main>
    </div>
  )
}
