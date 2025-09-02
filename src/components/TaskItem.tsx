import { useState } from 'react';
import styles from './TaskItem.module.css'
import trashIcon from './assets/trash.png'
import checkIcon from './assets/check.png'

interface TaskItemProps {
    id: string,
    task: string,
    taskStatus: (completed:boolean, id:string) => void,
    onDeleteTask: (id: string) => void
}

export function TaskItem({task, id, taskStatus, onDeleteTask}: TaskItemProps) {

    const [taskCompleted, setTaskCompleted] = useState(false)


    function handleDelete() {
        onDeleteTask(id);
    }

    function completeTask() {
        setTaskCompleted(!taskCompleted);
        taskStatus(!taskCompleted, id);
    }

    return (
        <div className={styles.taskItem}>
            <div className={styles.item}>
                <button onClick={completeTask} className={taskCompleted ? styles.check : styles.notChecked}>
                    <img className={taskCompleted? styles.checkIcon : styles.checkIconHide} src={checkIcon} alt="check icon" />
                </button>
                <div className={taskCompleted ? styles.completed : styles.description}>
                    {task}
                </div>
            </div>
            <div className={styles.deleteItem}>
                <button onClick={handleDelete}><img src={trashIcon} alt="Delete Icon" /></button>
            </div>
        </div>
    )
}