import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

export function Task(props) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon 
        icon={faTrashAlt} 
        className={styles.icons} 
        onClick={() => props.deleteTask(props.task.id)}
        color="red"
      />
      <p className={styles.title}>{props.task.title}</p>
      <FontAwesomeIcon 
        icon={props.task.isCompleted ? faCheckSquare : faSquare} 
        className={styles.icons}
        onClick={() => props.updateTask(props.task.id)}
        color="#BB86FC"
      />
    </div>
  )
}
