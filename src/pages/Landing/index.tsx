import React from 'react';
import { Link } from 'react-router-dom';

import logo_img from '../../assets/images/logo.svg';
import landing_img from '../../assets/images/landing.svg';

import study_icon from "../../assets/images/icons/study.svg";
import give_classes_icon from "../../assets/images/icons/give-classes.svg";
import purple_heart_icon from "../../assets/images/icons/purple-heart.svg";

import './styles.css';

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo_img} alt="Proffy logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                
                <img 
                    src={landing_img} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={study_icon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={give_classes_icon} alt="Ensinar"/>
                        Ensinar
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purple_heart_icon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;