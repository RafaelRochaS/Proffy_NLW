import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css'

function TeacherList() {
    const [subject, set_subject] = useState('');
    const [week_day, set_week_day] = useState('');
    const [time, set_time] = useState('');
    const [teachers, set_teachers] = useState([]);

    async function search_teachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get("classes", {
            params: {
                subject,
                week_day,
                time
            }
        });

        set_teachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={search_teachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => { set_subject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Ed. Física', label: 'Ed. Física' },
                        ]} 
                        />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={e => { set_week_day(e.target.value) }}
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
                        type="time" 
                        name="time" 
                        label="Hora" 
                        value={time} 
                        onChange={(e) => {
                            set_time(e.target.value)}}
                    />
                    <button type="submit"> 
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
}

export default TeacherList;