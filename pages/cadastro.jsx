import Link from 'next/link';
import styles from '../styles/Login.module.css';

import LoginCard from '../src/components/LoginCard/Logincard';
import Input from '../src/components/Input/input';
import Button from '../src/components/Button/button';

export default function Cadastro() {
    return (
        <div className={styles.background}>
            <LoginCard titulo="Crie a sua conta">
                <form className={styles.form}>
                    <Input type="text" placeholder="Seu nome" />
                    <Input type="email" placeholder="Seu email" />
                    <Input type="password" placeholder="Sua Senha" />
                    <Input type="password" placeholder="Confirme sua senha" />
                    <Button>Cadastrar</Button>
                    <Link href='/login'>Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}