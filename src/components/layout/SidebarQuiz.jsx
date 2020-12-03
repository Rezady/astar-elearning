import React, { useState } from 'react';
// import BodyQuestion5 from '../question-5/BodyQuestion5.jsx';
import RouterQuiz from '../../router/RouterQuiz.jsx';
// import '../../assets/css/sidebar.css'
// import '../../assets/css/navbar.css';

const SidebarQuiz = (props) => {


    return (

        < div className="container-fluid" >
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 1
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 2
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 3
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 4
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 5
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle text-warning" aria-hidden="true"></i>
                                    Question 6
                                </a>
                            </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Additional</span>
                            <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Other
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Other
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Other
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Other
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {props.children}

            </div>
        </ div>
    )
}

export default SidebarQuiz;