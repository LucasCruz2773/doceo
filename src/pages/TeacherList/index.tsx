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
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/11933432_1006915675996088_8906614534962967671_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEOqA8N6hOHYqyYqmG5RDd7fU2jv0qxKJl9TaO_SrEomTBbeJDGySycZvOuT7YbzokTdyJmLSrjTq6B05mvLG-y&_nc_ohc=aHN0BTe5MJ8AX_vO9Qd&_nc_ht=scontent.fplu1-1.fna&oh=ad7c89714fb1853262435c2ba7f48e99&oe=5FE9A71B"
                    bio="Belíssimo Professor"
                    cost={999}
                    name="Fabiano Costa"
                    subject="Química"
                    whatsapp="19995730199"
                />
                <TeacherItem
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/11933432_1006915675996088_8906614534962967671_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEOqA8N6hOHYqyYqmG5RDd7fU2jv0qxKJl9TaO_SrEomTBbeJDGySycZvOuT7YbzokTdyJmLSrjTq6B05mvLG-y&_nc_ohc=aHN0BTe5MJ8AX_vO9Qd&_nc_ht=scontent.fplu1-1.fna&oh=ad7c89714fb1853262435c2ba7f48e99&oe=5FE9A71B"
                    bio="Belíssimo Professor"
                    cost={999}
                    name="Fabiano Costa"
                    subject="Química"
                    whatsapp="19995730199"
                />
                <TeacherItem
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/11933432_1006915675996088_8906614534962967671_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEOqA8N6hOHYqyYqmG5RDd7fU2jv0qxKJl9TaO_SrEomTBbeJDGySycZvOuT7YbzokTdyJmLSrjTq6B05mvLG-y&_nc_ohc=aHN0BTe5MJ8AX_vO9Qd&_nc_ht=scontent.fplu1-1.fna&oh=ad7c89714fb1853262435c2ba7f48e99&oe=5FE9A71B"
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