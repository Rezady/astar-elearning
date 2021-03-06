import React, { useState } from "react";
import {
    HashRouter as Router,
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
            path: "/",
            exact: true,
            main: () => <BodyQuestion1 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question2",

            main: () => <BodyQuestion2 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question3",

            main: () => <BodyQuestion3 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question4",

            main: () => <BodyQuestion4 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question5",

            main: () => <BodyQuestion5 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question6",

            main: () => <BodyQuestion6 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question7",

            main: () => <BodyQuestion7 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/question8",

            main: () => <BodyQuestion8 onClick={valueProps => set(value + valueProps)} />
        },
        {
            path: "/result",

            main: () => <FinalResult result={value} />
        },
    ]

    return (

        <>
            {() => set(0)}
            <NavbarQuiz />
            <SidebarQuiz point={value === null ? '0' : value} >
                <Router basename="/">
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
