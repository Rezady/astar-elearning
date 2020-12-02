import React, { useState } from 'react';
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';

const Question1 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz />

        </>
    )
}

export default Question1;