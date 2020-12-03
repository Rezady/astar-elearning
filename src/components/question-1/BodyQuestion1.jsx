import React, { useState, useReducer } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { initialState, reducer } from '../../reducer/reducer';

import '../../assets/css/question-1/body-question-1.css';
import blackboard from '../../assets/images/question-1-images.png';

const BodyQuestion1 = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4" id="main">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 mx-auto">Question 1</h1>
                <h3 className="float-xl-right">Points: {state.count}</h3>
                {console.log('stateInitial: ', initialState)}
                {console.log('state: ', state)}
            </div>


            <div class="card mx-auto align-middle border-light d-flex" id="body-question-1">
                <img class="card-img-top mx-auto" src={blackboard} alt="Card image cap" />
                <div class="card-body">
                    <h3 class="card-title font-weight-bold mx-auto">Berapakah hasil dari perhitungan diatas ? </h3>

                    <div class="button-answer d-block">
                        <button class="btn btn-primary btn-xl" href="/question2" role="button">100</button>
                        <button class="btn btn-success btn-xl" href="/question2" role="button">350</button>
                    </div>
                    <div class="button-answer d-block">
                        <button class="btn btn-warning btn-xl" role="button" href="/question2" onClick={() => dispatch({ type: 'increment' })}>500</button>
                        <button class="btn btn-info btn-xl" href="/question2" role="button">700</button>
                    </div>

                </div>
            </div>
        </main>
    )
}

// function App() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//       <>
//         Count: {state.count}
//         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         <button onClick={() => dispatch({type: 'increment'})}>+</button>
//       </>
//     );
//   }

// export default reducer

// const mapStateToProps = state => {
//     return {
//         ctr: state.counter
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrementCounter: () => dispatch({ type: 'INCREMENT', value: 10 }),
//     };
// };

export default BodyQuestion1;


