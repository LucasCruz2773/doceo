import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher{
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string
}




const TeacherItem: React.FC<Teacher> = ({avatar, bio, cost, name, subject, whatsapp}) => {

    return(
        <article className="teacher-item">
            <header>
                <img src={avatar} alt={name}/>
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p>{bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {cost}</strong>
                </p>
                <a 
                    target="_blank"
                    href={`https://wa.me/${whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;