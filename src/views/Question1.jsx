import React, { useState } from 'react';
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';
import BodyQuestion1 from '../components/question-1/BodyQuestion1.jsx';

const Question1 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz >
                <BodyQuestion1 />
            </SidebarQuiz>
        </>
    )
}

export default Question1;