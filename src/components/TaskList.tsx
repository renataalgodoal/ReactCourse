import { TaskItem } from '../TaskItem'
import { TaskCounter } from './TaskCounter'
import styles from './TaskList.module.css'

interface TaskListProps {
    tasks: TaskItem[],
    taskCount: number,
    onDeleteTask: (id:string) => void,
    onChangeStatus: (status: boolean, id: string) => void
}

interface TaskItem {
    id: string,
    completed: boolean,
    description: string
}

export function TaskList({tasks, taskCount, onDeleteTask, onChangeStatus}:TaskListProps) {

    const completedTasksCount = tasks.filter(task =>  task.completed).length

    function taskStatus(status:boolean, id:string) {
       onChangeStatus(status, id);
    }

    return (
        <div className={styles.taskList}>
            <header className={styles.headerTaskList}>
                <div className={styles.toDoList}>
                    To do list 
                    <TaskCounter taskCount={taskCount}/>
                </div>
                <div className={styles.doneList}>
                    Completed tasks
                    <TaskCounter taskCount={completedTasksCount}/>
                </div>
            </header>
            <div>
                {
                    tasks.map((task) => {
                        return <TaskItem task={task.description} key={task.id} id={task.id} taskStatus={taskStatus} onDeleteTask={onDeleteTask}/>
                    })
                }
            </div>
        </div>
    )
}