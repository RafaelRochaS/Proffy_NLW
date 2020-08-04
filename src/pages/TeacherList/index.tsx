import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import logo_img from '../../assets/images/logo.svg';

import back_icon from '../../assets/images/icons/back.svg';

import './styles.css'

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader />
        </div>
    );
}

export default TeacherList;