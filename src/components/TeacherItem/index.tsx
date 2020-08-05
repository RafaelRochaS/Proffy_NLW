import React from 'react';

import whatsapp_icon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
            <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/68481074?s=460&v=4" alt="Placeholder"/>
                    <div>
                        <strong>Nome do Professor</strong>
                        <span>Química</span>
                    </div>
                </header>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies viverra metus, ut dignissim augue aliquam in. Pellentesque vel lacus odio. Suspendisse in elementum est.
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$40,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsapp_icon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    );
}

export default TeacherItem;