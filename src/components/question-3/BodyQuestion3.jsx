import React from 'react';
import { NavLink } from "react-router-dom";

import '../../assets/css/question-3/body-question-3.css';
import monas from '../../assets/images/question-3-images.png';


const BodyQuestion3 = (props) => {

    return (

        <div class="card mx-auto align-middle
             border-light d-flex" id="body-question-1">
            { console.log('body3')}
            <img class="card-img-top mx-auto" src={monas}
                alt="Card image cap" />
            <div class="card-body">
                <h3 class="card-title font-weight-bold text-center">dimana letak gambar monumen diatas ? </h3>

                <div class="button-answer d-block">
                    <NavLink to="/question4">
                        <a class="btn btn-primary btn-xl" role="button" onClick={() => props.onClick(0)}>Jawa Barat</a>
                    </NavLink>
                    <NavLink to="/question4">
                        <a class="btn btn-success btn-xl" role="button" onClick={() => props.onClick(0)}>Kalimantan Selatan</a>
                    </NavLink>
                </div>
                <div class="button-answer d-block">
                    <NavLink to="/question4">
                        <a class="btn btn-warning btn-xl" role="button" onClick={() => props.onClick(10)}>Jakarta</a>
                    </NavLink>
                    <NavLink to="/question4">
                        <a class="btn btn-info btn-xl" role="button" onClick={() => props.onClick(0)}>SUmatra Utara</a>
                    </NavLink>
                </div>

            </div>
        </div>

    )
}

export default BodyQuestion3;