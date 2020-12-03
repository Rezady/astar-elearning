import React, { useState } from 'react';
// import {
//     useParams
// } from "react-router-dom";
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import BodyQuestion3 from '../components/question-3/BodyQuestion3.jsx';
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';


const Question3 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz >
                <BodyQuestion3 />
            </SidebarQuiz>
        </>
    )
}

export default Question3;