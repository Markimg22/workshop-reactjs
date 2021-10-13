import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Task } from '../../components/Task'

export function Home() {
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const localTask = localStorage.workshop

    if (!localTask) {
      localStorage.workshop = JSON.stringify(tasks)
    } else {
      setTasks(JSON.parse(localTask))
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const createTask = (event) => {
    event.preventDefault()

    const newTasks = [...tasks, {
      id: uuid(),
      title,
      isCompleted: false
    }]

    localStorage.workshop = JSON.stringify(newTasks)

    setTasks(newTasks)
    setTitle('')
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    localStorage.workshop = JSON.stringify(newTasks)

    setTasks(newTasks)
  }

  const updateTask = (id) => {
    const newTasks = tasks.filter((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }

      return tasks
    })

    localStorage.workshop = JSON.stringify(newTasks)

    setTasks(newTasks)
  }

  return (
    <div>
      <Header title="Crie sua lista de tarefas." />
      <form className={styles.form} onSubmit={createTask}>
        <Input type="text" maxLength={20} placeholder="Insira sua tarefa..." value={title} onChange={handleChange} />
        <Button type="submit" title="Adicionar tarefa" />
      </form>
      <div className={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
      </div>
    </div>
  )
}
