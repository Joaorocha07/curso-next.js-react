import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import Link from 'next/link';
import styles from '../styles/Login.module.css'

import LoginCard from '../src/components/LoginCard/Logincard';
import Input from '../src/components/Input/input';
import Button from '../src/components/Button/button';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const [error, setError] = useState('');

    const router = useRouter();

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        })
    }

    const handleFormSubmit = async (event) => {
        try {
            event.preventDefault();

            if (!formData.email && !formData.senha) {
                setError('Insira os campos!');
            }

            const resposta = await fetch(`/api/user/login`, {
                method: 'POST',
                body: JSON.stringify(formData),
            })

            const json = await resposta.json();

            if (resposta.status !== 200) throw new Error(json);

            setCookie('authorization', json)

            router.push('/');
            
            console.log(json);
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className={styles.background}>
            <LoginCard titulo="Entre em sua conta">
                <form onSubmit={handleFormSubmit} className={styles.form}>
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
                    <Button>Logar</Button>
                    {error && <p className={styles.error}>{error}</p>}
                    <Link className={styles.paragrafo} href='/cadastro'>Ainda não possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}