import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../../assets/css/question-7/body-question-7.css';
import horse from '../../assets/images/question-7-images.png';


const BodyQuestion7 = (props) => {

    const [jawaban, setJawaban] = useState("");


    return (
        <div class="card mx-auto align-middle border-light d-flex border-0 rounded-lg" id="body-question-1">
            <img class="card-img-top mx-auto" src={horse} alt="Card image cap" />

            <div class="card-body">
                <h3 class="card-title font-weight-bold text-center">ada berapakah jumlah kaki kuda ?  </h3>

                <div class="input-group mb-3">
                    <input type="text" class="form-control-sm mx-auto border-0 d-block" id="inputJawaban" placeholder="jumlah"
                        aria-label="jumlah" aria-describedby="basic-addon2"
                        onChange={e => setJawaban(e.target.value)} />
                </div>
                <div class="button-answer text-center">
                    <NavLink to="/question8">
                        <button class="btn btn-primary btn-sm text-center"
                            onClick={jawaban === "4" ? () => props.onClick(10) : () => props.onClick(0)}>jawab</button>
                    </NavLink>
                </div>
            </div>

        </div>


    )
}

export default BodyQuestion7;