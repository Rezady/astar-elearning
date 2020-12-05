import React from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/css/question-2/body-question-2.css';
import cowImage from '../../assets/images/question-2-images.png';


const BodyQuestion2 = (props) => {

    return (
        < div class="card mx-auto align-middle border-light d-flex" id="body-question-1">

            <img class="card-img-top mx-auto" src={cowImage} alt="Card image cap" />
            <div class="card-body">
                <h3 class="card-title font-weight-bold text-center">
                    Apa bahasa inggris dari gambar diatas ?
                </h3>

                <div class="button-answer d-block">
                    <NavLink to="/question3">
                        <a class="btn btn-primary btn-xl" role="button" onClick={() => props.onClick(10)} >
                            Cow
                        </a>
                    </NavLink>
                    <NavLink to="/question3">
                        <a class="btn btn-success btn-xl" role="button" onClick={() => props.onClick(0)}> Cat</a>
                    </NavLink>
                </div>

                <div class="button-answer d-block">
                    <NavLink to="/question3">
                        <a class="btn btn-warning btn-xl" role="button" onClick={() => props.onClick(0)}>Horse</a>
                    </NavLink>
                    <NavLink to="/question3">
                        <a class="btn btn-info btn-xl" role="button" onClick={() => props.onClick(0)}>Ant</a>
                    </NavLink>
                </div>

            </div>
        </ div>

    )
}

export default BodyQuestion2;