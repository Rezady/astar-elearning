import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Question1 from '../views/Question1.jsx';
import Question2 from '../views/Question2.jsx';
import Question3 from '../views/Question3.jsx';
import Question4 from '../views/Question4.jsx';
import Question5 from '../views/Question5.jsx';
import Test from '../views/test.jsx';
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
                            <Link to="/question1"></Link>
                        </li>
                        <li>
                            <Link to="/question2"></Link>
                        </li>
                        <li>
                            <Link to="/question3"></Link>
                        </li>
                        <li>
                            <Link to="/question4"></Link>
                        </li>
                        <li>
                            <Link to="/question5"></Link>
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
                    <Route exact path="/" component={Test} />
                    <Route exact path="/question1" component={Question1} />
                    <Route exact path="/question2" component={Question2} />
                    <Route exact path="/question3" component={Question3} />
                    <Route exact path="/question4" component={Question4} />
                    <Route exact path="/question5" component={Question5} />
                </Switch>
            </div>
        </Router>

    );
}

