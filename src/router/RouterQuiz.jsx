import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import FinalResult from '../components/final-result/FinalResult.jsx';
import BodyQuestion1 from '../components/question-1/BodyQuestion1.jsx';
import BodyQuestion2 from '../components/question-2/BodyQuestion2.jsx';
import BodyQuestion3 from '../components/question-3/BodyQuestion3.jsx';
import BodyQuestion4 from '../components/question-4/BodyQuestion4.jsx';
import BodyQuestion5 from '../components/question-5/BodyQuestion5.jsx';
import BodyQuestion6 from '../components/question-6/BodyQuestion6.jsx';
import BodyQuestion7 from '../components/question-7/BodyQuestion7.jsx';
import BodyQuestion8 from '../components/question-8/BodyQuestion8.jsx';

import NavbarQuiz from '../components/layout/NavbarQuiz.jsx';
import SidebarQuiz from '../components/layout/SidebarQuiz.jsx';
import useSessionstorage from "@rooks/use-sessionstorage";

import '../assets/css/router.css';

export default function RouterQuiz() {
    const [value, set, remove] = useSessionstorage("my-value", 0);
    const [point, setPoint] = useState(0)
    console.log('pointrouter: ', point)
    const routes = [
        {
            path: "/astar-elearning",
            exact: true,
            main: () => <BodyQuestion1 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question2",
            exact: true,
            main: () => <BodyQuestion2 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question3",
            exact: true,
            main: () => <BodyQuestion3 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question4",
            exact: true,
            main: () => <BodyQuestion4 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question5",
            exact: true,
            main: () => <BodyQuestion5 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question6",
            exact: true,
            main: () => <BodyQuestion6 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question7",
            exact: true,
            main: () => <BodyQuestion7 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/question8",
            exact: true,
            main: () => <BodyQuestion8 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/astar-elearning/result",
            exact: true,
            main: () => <FinalResult result={value} />
        },
    ]

    return (

        <>
            {() => set(0)}
            <NavbarQuiz />
            <SidebarQuiz point={value === null ? '0' : value} >
                <Router>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </Router>
            </SidebarQuiz>
        </>

    );
}
