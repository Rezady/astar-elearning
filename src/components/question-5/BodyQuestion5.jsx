import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import '../../assets/css/question-5/body-question-5.css';
import animalGroup from '../../assets/images/question-5-images.png';


const BodyQuestion5 = (props) => {

    const [jawabanPertama, setJawabanPertama] = useState(false)
    const [jawabanKedua, setJawabanKedua] = useState(false)

    return (
        <div class="card mx-auto align-middle border-light d-flex" id="body-question-1">
            <img class="card-img-top mx-auto" src={animalGroup} alt="Card image cap" />

            <div class="card-body">
                <h3 class="card-title font-weight-bold text-center">Silahakan pilih 2 hewan karnivora ! </h3>

                <form class="text-center">
                    <div class="form-check-inline mr-5">
                        <label class="form-check-label" for="check1" >
                            <input type="checkbox" class="form-check-input" id="check1" />gajah
                        </label>
                    </div>
                    <div class="form-check-inline ml-5">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check2" />kelinci
                        </label>
                    </div>
                    <div>
                        <div class="form-check-inline mr-5">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="check3"
                                    onClick={() => setJawabanPertama(!jawabanPertama)} />singa
                        </label>
                        </div>
                        <div class="form-check-inline ml-5">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="check4"
                                    onClick={() => setJawabanKedua(!jawabanKedua)} />kucing
                        </label>
                        </div>
                    </div>
                    <NavLink to="/question6">
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

export default BodyQuestion5;