import React, { useState } from 'react';

const FinalResult = (props) => {
    return (


        <div div class="card mx-auto align-middle border-light d-flex" id="body-question-1" >

            <div class="card-body">
                <h3 class="card-title text-center font-weight-bold ">Selamat anda mendapatkan nilai : {props.result} </h3>
                <h4 class="card-title text-center font-weight-bold ">benar : {props.result / 10}</h4>
                <h4 class="card-title text-center font-weight-bold ">salah : {(props.result / 10) - 8}</h4>
                <h3 class="card-title text-center font-weight-bold ">Apakah Anda Ingin bermain Lagi ?  </h3>
            </div>
        </div >
    )
}

export default FinalResult;