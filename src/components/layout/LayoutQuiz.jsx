import React, { useState } from 'react';
import '../../assets/css/sidebar.css'

const LayoutQuiz = () => {
    return (
        <>
            <div id="viewport">
                {/* <!-- Sidebar --> */}
                <div id="sidebar">
                    <header>
                        <a>My App</a>
                    </header>
                    <ul className="nav">
                        <li>
                            <i className="zmdi zmdi-view-dashboard"></i>
                            Dashboard
                        </li>
                        <li>
                            <i className="zmdi zmdi-link"></i>
                            Shortcuts
                        </li>
                        <li>
                            <i className="zmdi zmdi-widgets"></i>
                            Overview
                        </li>
                        <li>
                            <i className="zmdi zmdi-calendar"></i>
                            Events
                        </li>
                        <li>
                            <i className="zmdi zmdi-info-outline"></i>
                            About
                        </li>
                        <li>
                            <i className="zmdi zmdi-settings"></i>
                            Services
                        </li>
                        <li>
                            <i className="zmdi zmdi-comment-more"></i>
                            Contact
                        </li>
                    </ul>
                </div>
                {/* <!-- Content --> */}
                <div id="content">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <i className="zmdi zmdi-notifications text-danger"></i>
                                </li>
                                <li>Test User</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <h1>Simple Sidebar</h1>
                        <p>
                            Make sure to keep all page content within the
                            <code>#content</code>.
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LayoutQuiz;