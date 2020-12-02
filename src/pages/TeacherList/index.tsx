import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TeacherList(){
    
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => { setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        name="time" 
                        label="Horário" 
                        type="time"
                        value={time}
                        onChange={e => { setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFNWKtTWtyiGA/profile-displayphoto-shrink_800_800/0/1516301913452?e=1612396800&v=beta&t=_a-fji-iLDPVGIEBIXw7q4EnHm--le5ccXCzRySxDV8"
                    bio="Belíssimo Professor"
                    cost={999}
                    name="Fabiano Costa"
                    subject="Química"
                    whatsapp="19995730199"
                />
                <TeacherItem
                    avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFNWKtTWtyiGA/profile-displayphoto-shrink_800_800/0/1516301913452?e=1612396800&v=beta&t=_a-fji-iLDPVGIEBIXw7q4EnHm--le5ccXCzRySxDV8"
                    bio="Belíssimo Professor"
                    cost={999}
                    name="Fabiano Costa"
                    subject="Química"
                    whatsapp="19995730199"
                />
                <TeacherItem
                    avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFNWKtTWtyiGA/profile-displayphoto-shrink_800_800/0/1516301913452?e=1612396800&v=beta&t=_a-fji-iLDPVGIEBIXw7q4EnHm--le5ccXCzRySxDV8"
                    bio="Belíssimo Professor"
                    cost={999}
                    name="Fabiano Costa"
                    subject="Química"
                    whatsapp="19995730199"
                />
                
            </main>
        </div>
    )
}

export default TeacherList;