import './global.css'
import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import styles from './App.module.css'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

interface TaskItem {
    id: string, 
    completed: boolean,
    description: string
}

export function App() {
  const [taskList, setNewTask] = useState<TaskItem[]>([]);
  

  function handleNewTask(task:TaskItem) {
    console.log('task:', task)
    setNewTask([...taskList, task]);
  }

  function deleteTask(id: string) {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setNewTask(newTaskList);
  }

  function changeStatus(status: boolean, id: string) {
    setNewTask(prev => prev.map((task) => task.id === id? {id: id, completed: !status, description: task.description} : task))
  }

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.createTaskApp}>
        <CreateTask onTaskCreate={handleNewTask} />
      </div>
      <div className={styles.taskList}>
        
        <TaskList tasks={taskList} taskCount={taskList.length} onDeleteTask={deleteTask} onChangeStatus={changeStatus}/>
      </div>      
    </div>
  )
}

