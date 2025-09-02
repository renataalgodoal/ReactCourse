import styles from './TaskCounter.module.css'

interface TaskCountProps {
    taskCount?: number,
}

export function TaskCounter ({taskCount}: TaskCountProps) {
    return (
        <div className={styles.taskCounter}>
            {taskCount}
        </div>
    ) 
}