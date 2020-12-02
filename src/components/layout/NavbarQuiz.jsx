/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import '../../assets/css/navbar.css';
// import '../../assets/css/sidebar.css';


const NavbarQuiz = () => {
    return (
        <nav class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 ">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">Astar Quiz</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#">Sign out</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarQuiz