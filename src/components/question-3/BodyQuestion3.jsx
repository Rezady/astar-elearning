import React, { useState } from 'react';
// import '../../assets/css/navbar.css';
import '../../assets/css/question-3/body-question-3.css';
import monas from '../../assets/images/question-3-images.png';


const BodyQuestion3 = () => {


    return (
        <main role="main d-flex" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Question 1</h1>
            </div>

            {/* <h2>Section title</h2> */}

            <div class="card mx-auto align-middle
             border-light d-flex" id="body-question-1">
                <img class="card-img-top mx-auto" src={monas}
                    alt="Card image cap" />
                <div class="card-body">
                    <h3 class="card-title font-weight-bold mx-auto">dimana letak gambar monumen diatas ? </h3>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div class="button-answer d-block">
                        <a class="btn btn-primary btn-xl" href="/question4" role="button">Jawa Barat</a>
                        <a class="btn btn-success btn-xl" href="/question4" role="button">Kalimantan Selatan</a>
                    </div>
                    <div class="button-answer d-block">
                        <a class="btn btn-warning btn-xl" href="/question4" role="button">Jakarta</a>
                        <a class="btn btn-info btn-xl" href="/question4" role="button">SUmatra Utara</a>
                    </div>

                </div>
            </div>


        </main>
    )
}

export default BodyQuestion3;