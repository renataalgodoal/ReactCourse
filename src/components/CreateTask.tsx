import styles from './CreateTask.module.css'
import { useState, type FormEvent, type ChangeEvent} from 'react';
import {v4 as uuidv4} from 'uuid'

interface CreateTaskProps {
    onTaskCreate: (task:TaskItem) => void
}

interface TaskItem {
    id: string,
    completed: boolean,
    description: string
}

export function CreateTask ({onTaskCreate}: CreateTaskProps) {
    const [newTask, setNewTask] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const newTaskObject = {
            id: uuidv4(),
            completed: false,
            description: newTask
        }
        onTaskCreate(newTaskObject)
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTask(event.target.value);
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea className={styles.textInput}
                    value={newTask}
                    onChange={handleNewTaskChange}
                    name="newTask"
                    placeholder='Add a new task'
                    required/>
                <button className={styles.submitButton} type='submit'>Add</button>
            </form>
        </div>
    )
}