import { useState } from 'react';

import Link from 'next/link';
import styles from '../styles/Login.module.css';

import LoginCard from '../src/components/LoginCard/Logincard';
import Input from '../src/components/Input/input';
import Button from '../src/components/Button/button';

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmSenha: '',
    });

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        })
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div className={styles.background}>
            <LoginCard titulo="Crie a sua conta">
                <form onSubmit={handleFormSubmit} className={styles.form}>
                    <Input 
                        type="text" 
                        value={formData.nome} 
                        onChange={(event) => {handleFormEdit(event, 'nome')}}
                        placeholder="Seu nome" 
                        required 
                    />
                    <Input 
                        type="email" 
                        value={formData.email} 
                        onChange={(event) => {handleFormEdit(event, 'email')}} 
                        placeholder="Seu email" 
                        required 
                    />
                    <Input 
                        type="password" 
                        value={formData.senha} 
                        onChange={(event) => {handleFormEdit(event, 'senha')}} 
                        placeholder="Sua Senha" 
                        required 
                    />
                    <Input 
                        type="password" 
                        value={formData.confirmSenha} 
                        onChange={(event) => {handleFormEdit(event, 'confirmSenha')}} 
                        placeholder="Confirme sua senha" 
                        required 
                    />
                    <Button>Cadastrar</Button>
                    <Link className={styles.paragrafo} href='/login'>Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}