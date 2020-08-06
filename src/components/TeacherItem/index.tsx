import React from 'react';

import api from '../../services/api';

import whatsapp_icon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    name: string,
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function create_new_connection() {
        api.post("connections", {
            user_id: teacher.id
        })
    }

    return (
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt="Placeholder"/>
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>
                <p>
                    {teacher.bio}
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ {teacher.cost} </strong>
                    </p>
                    <a onClick={create_new_connection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel='noopener noreferrer'>
                        <img src={whatsapp_icon} alt="Whatsapp"/>
                        Entrar em contato
                    </a>
                </footer>
            </article>
    );
}

export default TeacherItem;