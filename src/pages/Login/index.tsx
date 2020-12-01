import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

function Login(){
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]:value }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        alert('Login realizado com sucesso!')
        history.push('/');
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Faça seu login para continuar" 
                description="Não tem uma conta? Cadastre-se já gratuitamente!"
            />

            <main>
                <form onSubmit={handleCreateClass}>
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
                            value={avatar}
                            type="password"
                            onChange={(e) => {setAvatar(e.target.value)}}
                        />
                        <p className="forgot-password">
                            <a href="#">Esqueci minha senha</a>
                        </p>
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