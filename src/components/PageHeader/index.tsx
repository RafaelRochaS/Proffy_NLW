import React from 'react';
import { Link } from 'react-router-dom';

import logo_img from '../../assets/images/logo.svg';

import back_icon from '../../assets/images/icons/back.svg';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back_icon} alt="Voltar"/>
                </Link>
                <img src={logo_img} alt="Logo"/>
            </div>
            <div className="header-content">
                <strong>Estes são os proffys disponíveis.</strong>
            </div>
        </header>
    );
}

export default PageHeader