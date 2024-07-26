import React from "react";
import manicure from '../assets/images/manicure.png';
import pedicure from '../assets/images/pedicure.png';
import makeUp from '../assets/images/makeUp.png';
import hairStyle from '../assets/images/hairStyle.png';
import hairCutting from '../assets/images/hairCutting.png';
import eyebrow from '../assets/images/eyebrow.png';
import depilation from '../assets/images/depilation.png';
import cleaning from '../assets/images/cleaning.png';
import '../styles/services.css'



const Services = () => {
    return (
        <div className="content vh-100">
            <h3 className="text-center m-4 services  ">Delight in our services.</h3>
            <div className="row mx-2 row-gap-4">
                <div className="col-6 col-md-4 col-lg-3" >
                    <div className="card card-services" style={{ width: "100%", height: "100%" }} >
                        <div className="card-body text-center">
                            <img src={manicure} alt="Manicure" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Manicure</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={pedicure} alt="Pedicure" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Pedicure</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={makeUp} alt="Make Up" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Make Up</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={hairStyle} alt="Hairstyle" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Hairstyle</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={hairCutting} alt="Hair Cutting" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Hair Cutting</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={eyebrow} alt="Eyebrow Design" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Eyebrow Design</p>
                        </div>
                    </div>

                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={depilation} alt="Depilation" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Depilation</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card card-services" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body text-center">
                            <img src={cleaning} alt="Skin Cleaning" style={{ width: "100px" }} />
                            <p className="card-title p-2 m-1 fw-bold">Skin Cleaning</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}



export default Services;