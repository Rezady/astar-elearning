import React, { useState } from 'react';
// import {
//     useParams
// } from "react-router-dom";
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';
import BodyQuestion2 from '../components/question-2/BodyQuestion2.jsx';


const Question2 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz >
                <BodyQuestion2 />
            </SidebarQuiz>
        </>
    )
}

export default Question2;