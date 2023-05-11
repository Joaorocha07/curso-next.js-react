import Link from 'next/link';
import styles from '../styles/Login.module.css'

import LoginCard from '../src/components/LoginCard/Logincard';
import Input from '../src/components/Input/input';
import Button from '../src/components/Button/button';

export default function Login() {
    return (
        <div className={styles.background}>
            <LoginCard titulo="Entre em sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu email" />
                    <Input type="password" placeholder="Sua Senha" />
                    <Button>Logar</Button>
                    <Link className={styles.paragrafo} href='/cadastro'>Ainda não possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}