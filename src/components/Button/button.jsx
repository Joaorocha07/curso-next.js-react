import styles from './Button.module.css';

export default function Button({ children, ...props }) {
    return (
        <Button className={styles.button} {...props}>{children}</Button>
    )
}
