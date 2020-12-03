import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../../reducer/reducer';

import '../../assets/css/question-2/body-question-2.css';
import cowImage from '../../assets/images/question-2-images.png';


const BodyQuestion2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <main role="main d-flex" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Question 2</h1>
                <h3 className="float-xl-right">Points: {state.count}</h3>
            </div>

            {console.log('count2', state.count)}

            <div class="card mx-auto align-middle
             border-light d-flex" id="body-question-1">
                <img class="card-img-top mx-auto" src={cowImage}
                    alt="Card image cap" />
                <div class="card-body">
                    <h3 class="card-title font-weight-bold mx-auto">Apa bahasa inggris dari gambar diatas ? </h3>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div class="button-answer d-block">
                        <a class="btn btn-primary btn-xl" href="/question3" role="button" onClick={() => dispatch({ type: 'increment' })}>Cow</a>
                        <a class="btn btn-success btn-xl" href="/question3" role="button">Cat</a>
                    </div>
                    <div class="button-answer d-block">
                        <a class="btn btn-warning btn-xl" href="/question3" role="button">Horse</a>
                        <a class="btn btn-info btn-xl" href="/question3" role="button">Ant</a>
                    </div>

                </div>
            </div>


        </main>
    )
}

export default BodyQuestion2;