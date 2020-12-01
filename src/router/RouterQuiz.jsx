import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Question1 from '../views/Question1.jsx';
import Question2 from '../views/Question2.jsx';
import LayoutQuiz from '../components/layout/LayoutQuiz.jsx';
import NavbarQuiz from '../components/layout/NavbarQuiz.jsx';
import '../assets/css/router.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function RouterQuiz() {
    return (
        <Router>
            <div id="apps">
                <div id="nav">
                    <ul>
                        <li>
                            <Link to="/"></Link>
                        </li>
                        <li>
                            <Link to="/navbar"></Link>
                        </li>
                        <li>
                            <Link to="/question2"></Link>
                        </li>
                    </ul>
                </div>
                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route path="/">
                        <Question1 />
                    </Route>
                    <Route path="/navbar">
                        <NavbarQuiz />
                    </Route>
                    <Route path="/question2">
                        <Question2 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

