import React, { useState } from 'react';
// import {
//     useParams
// } from "react-router-dom";
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx'
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx'
import BodyQuestion4 from '../components/question-4/BodyQuestion4.jsx';
import '../assets/css/navbar.css';
import '../assets/css/sidebar.css';


const Question4 = () => {
    return (
        <>
            <NavbarQuiz />
            <SidebarQuiz >
                <BodyQuestion4 />
            </SidebarQuiz>
        </>
    )
}

export default Question4;