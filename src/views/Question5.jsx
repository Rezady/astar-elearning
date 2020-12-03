import React, { useState } from 'react';
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import BodyQuestion5 from '../components/question-5/BodyQuestion5.jsx';
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';


const Question5 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz >
                <BodyQuestion5 />
            </SidebarQuiz>
        </>
    )
}

export default Question5;