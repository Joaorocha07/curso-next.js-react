import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/LoginCard/Logincard';

export default function Cadastro() {
    return (
        <div className={styles.background}>
            <LoginCard titulo="Crie a sua conta">
                ABCD
            </LoginCard>
        </div>
    )
}