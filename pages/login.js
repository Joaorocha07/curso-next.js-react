import styles from '../styles/Login.module.css'

import LoginCard from '../src/components/LoginCard/Logincard';

export default function Login() {
    return (
        <div className={styles.background}>
            <LoginCard titulo="Entre em sua conta">
                TESTE
            </LoginCard>
        </div>
    )
}