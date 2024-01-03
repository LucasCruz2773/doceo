import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css'

function Login(){
    const history = useHistory();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e: FormEvent){
        e.preventDefault();

        alert('Login realizado com sucesso!')
        history.push('/give-classes');
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Faça seu login para continuar" 
                description="Não tem uma conta? Cadastre-se já gratuitamente!"
            />

            <main>
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Suas credenciais</legend>
                        <Input
                            name="email"
                            label="E-mail" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input 
                            name="password" 
                            label="Senha" 
                            value={password}
                            type="password"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                        {/* <p className="forgot-password">
                            <a href="#">Esqueci minha senha</a>
                        </p> */}
                    </fieldset>
                    <footer>
                        <p>
                            <a className="register-btn" href="/give-classes">Cadastrar</a>
                        </p>
                        <button type="submit">
                            Login
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default Login;