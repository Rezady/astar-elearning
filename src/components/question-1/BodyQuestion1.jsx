import React from 'react';
import { NavLink } from "react-router-dom";

import '../../assets/css/question-1/body-question-1.css';
import blackboard from '../../assets/images/question-1-images.png';

const BodyQuestion1 = (props) => {

    return (

        <div div class="card mx-auto align-middle border-light d-flex" id="body-question-1" >

            <img class="card-img-top mx-auto" src={blackboard} alt="Card image cap" />
            <div class="card-body">
                <h3 class="card-title text-center font-weight-bold ">Berapakah hasil dari perhitungan diatas ? </h3>

                <div class="button-answer d-block">
                    <NavLink to="/question2">
                        <button class="btn btn-primary btn-xl" onClick={() => props.onClick(0)}>100</button>
                    </NavLink>
                    <NavLink to="/question2">
                        <button class="btn btn-success btn-xl" onClick={() => props.onClick(0)} >350</button>
                    </NavLink>
                </div>

                <div class="button-answer d-block">
                    <NavLink to="/question2">
                        <a class="btn btn-warning btn-xl" role="button" onClick={() => props.onClick(10)}>500</a>
                    </NavLink>
                    <NavLink to="/question2/">
                        <button class="btn btn-info btn-xl" onClick={() => props.onClick(0)}>700</button>
                    </NavLink>
                </div>

            </div>
        </div >

    )
}

export default BodyQuestion1;


