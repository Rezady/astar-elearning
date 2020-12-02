import React, { useState } from 'react';
// import '../../assets/css/sidebar.css'
// import '../../assets/css/navbar.css';

const SidebarQuiz = () => {

    return (

        <div className="container-fluid">
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

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                        </div>
                    </div>

                    {/* <!-- <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> --> */}

                    <h2>Section title</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">

                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SidebarQuiz;