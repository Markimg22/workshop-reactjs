import React, { useState } from 'react'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Task } from '../../components/Task'

export function Home() {
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const createTask = (event) => {
    event.preventDefault()

    setTasks([...tasks, {
      id: String(tasks.length),
      title,
      isCompleted: false
    }])

    setTitle('')
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  const updateTask = (id) => {
    const newTasks = tasks.filter((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }

      return tasks
    })

    setTasks(newTasks)
  }

  return (
    <div>
      <Header />
      <form className={styles.form} onSubmit={createTask}>
        <Input value={title} onChange={handleChange} />
        <Button />
      </form>
      <div className={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
      </div>
    </div>
  )
}
