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
            <PageHeader title="Estes são os professores disponíveis.">
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
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/95945570_3730540606961297_6313271934192713728_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF_wB6wBMCGxqL6UtfpXft717czRTxOGdXXtzNFPE4Z1ed_aSGADpe0wp0fztwbJ_4Ob2F41VHWH3Udd6LhKZ7F&_nc_ohc=5BiUF6FNQQAAX_aX-q7&_nc_ht=scontent.fplu1-1.fna&oh=5d5c012a30771e44d09433a3b008fc66&oe=5FEDA158"
                    bio="Estou cursando História na USP e estou disposta a passar todo meu conhecimento para adoradores do passado."
                    cost={40}
                    name="Carla Rodrigues"
                    subject="História"
                    whatsapp="11997389293"
                />
                <TeacherItem
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/36800513_2050217838386368_8327254108708798464_n.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeHxL5ZNe3oQXxUw_0B51FG3LQfxjzRycd8tB_GPNHJx3yKe9bh9uUqv-WyVKvxBlKaWoYZCwP5bcoT0_1IX_7B1&_nc_ohc=RyLJZi7fqKwAX9AD4MP&_nc_ht=scontent.fplu1-1.fna&oh=2d578c1abc282c2c84bfaac442b2f2bf&oe=5FEED134"
                    bio="Formada em artes e sedenta em distribuir conteúdo para novos alunos"
                    cost={50}
                    name="Marcia Missura"
                    subject="Artes"
                    whatsapp="219963580"
                />
                <TeacherItem
                    avatar="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.0-9/20799187_1881502678768443_1386940886494692386_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGhZjkOGALKMr_hlfhoXBBqu8IhFaxNTzS7wiEVrE1PNAp0e701Bg-5b0oKxzPbgzgcljSnPaJQzq5ahDLjFKm8&_nc_ohc=qZl2etcJaWAAX8N1YCg&_nc_ht=scontent.fplu1-1.fna&oh=5d4a04e8ca6d4fc36691abbaf2adbd3e&oe=5FEC82C2"
                    bio="Aos interessados em descobrir mais sobre a natureza e funcionamento dos números, me contacte"
                    cost={25}
                    name="André Luiz"
                    subject="Matemática"
                    whatsapp="19996351485"
                />
                
            </main>
        </div>
    )
}

export default TeacherList;