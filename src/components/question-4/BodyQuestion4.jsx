import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import '../../assets/css/question-4/body-question-4.css';
import evenNumber from '../../assets/images/question-4-images.png';


const BodyQuestion4 = (props) => {

    const [jawabanPertama, setJawabanPertama] = useState(false)
    const [jawabanKedua, setJawabanKedua] = useState(false)

    return (

        <div class="card mx-auto align-middle
             border-light d-flex" id="body-question-1">
            { console.log('body4')}
            <img class="card-img-top mx-auto" src={evenNumber}
                alt="Card image cap" />
            <div class="card-body">
                <h3 class="card-title font-weight-bold text-center">Silahakan pilih 2 angka genap ! </h3>

                <form class="text-center">
                    <div class="form-check-inline mr-5">
                        <label class="form-check-label" for="check1" >
                            <input type="checkbox" class="form-check-input" id="check1"
                                onClick={() => setJawabanPertama(!jawabanPertama)} />12
                        </label>
                    </div>
                    <div class="form-check-inline ml-5">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check2"
                                onClick={() => setJawabanKedua(!jawabanKedua)} />48
                        </label>
                    </div>
                    <div>
                        <div class="form-check-inline mr-5">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="check3" />35
                        </label>
                        </div>
                        <div class="form-check-inline ml-5">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="check4" />37
                        </label>
                        </div>
                    </div>
                    <NavLink to="/question5">
                        <button type="submit" class="btn btn-primary text-center"
                            onClick={jawabanPertama === true && jawabanKedua === true ? () => props.onClick(10) :
                                () => props.onClick(0)}
                        >Submit</button>
                    </NavLink>
                </form>

            </div>
        </div>

    )
}

export default BodyQuestion4;