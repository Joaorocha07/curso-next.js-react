import styles from './LoginCard.module.css';

export default function LoginCard({ children, titulo }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.titulo}>{titulo}</h2>
            {children}
        </div>
    )
}