import React, { useState } from 'react';

const SidebarQuiz = (props) => {
    return (

        < div className="container-fluid" >
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    {console.log('sidebar')}
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
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
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 6
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 7
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    Question 8
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <main role="main d-flex" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap 
                        align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2 text-center">Question</h1>
                        <h3 className="float-xl-right" id="pointBoard">point: {props.point}</h3>
                    </div>
                    {props.children}
                </main>

            </div>
        </ div>
    )
}

export default SidebarQuiz;