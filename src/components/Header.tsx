import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.png'
import todoLogo from '../assets/todo.png'


export function Header () {
    return (
        <header className={styles.header}>
            <img className={styles.rocket} src={rocketLogo} alt="Logo" />
            <img className={styles.todo} src={todoLogo} alt="Logo" />
        </header>
    );
}