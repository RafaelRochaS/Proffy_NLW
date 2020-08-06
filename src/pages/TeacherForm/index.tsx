import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warning_icon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, set_name] = useState('');
    const [avatar, set_avatar] = useState('');
    const [whatsapp, set_whatsapp] = useState('');
    const [bio, set_bio] = useState('');
    const [cost, set_cost] = useState('');
    const [subject, set_subject] = useState('');

    const [schedule_items, set_schedule_items] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function add_new_schedule_item(){
        set_schedule_items([
            ...schedule_items,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function set_schedule_item_value(position: number, field: string, value: string) {
        const updated_schedule_items = schedule_items.map((schedule_item, index) => {
            if (index === position) {
                return { ...schedule_item, [field]: value };
            }

            return schedule_item;
        })

        set_schedule_items(updated_schedule_items);
    }

    function handle_create_class(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: schedule_items
        }).then(() => {
            alert("Cadastro realizado com sucesso!");
            history.push('/');
        }).catch(() => {
            alert("Erro no cadastro!");
        });
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handle_create_class}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input name="name" label="Nome Completo" value={name} onChange={(e) => { set_name(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { set_avatar(e.target.value) }} />
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => { set_whatsapp(e.target.value) }} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { set_bio(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { set_subject(e.target.value) }}
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
                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => { set_cost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={add_new_schedule_item}>
                                + Novo horário
                            </button>
                        </legend>
                        {schedule_items.map((schedule_item, index) => {
                            return (
                                <div key={schedule_item.week_day} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Dia da Semana"
                                        value={schedule_item.week_day}
                                        onChange={e => set_schedule_item_value(index, 'week_day', e.target.value)}
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
                                    <Input name="from" value={schedule_item.from} label="Das" type="time" onChange={e => set_schedule_item_value(index, 'from', e.target.value)} />
                                    <Input name="to" label="Até" value={schedule_item.to} type="time" onChange={e => set_schedule_item_value(index, 'to', e.target.value)} />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warning_icon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type='submit'>
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;
