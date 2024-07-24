import React from "react";
import manicure from '../assets/images/manicure.png';
import pedicure from '../assets/images/pedicure.png';
import makeUp from '../assets/images/makeUp.png';
import hairStyle from '../assets/images/hairStyle.png';
import hairCutting from '../assets/images/hairCutting.png';
import eyebrow from '../assets/images/eyebrow.png';
import depilation from '../assets/images/depilation.png';
import cleaning from '../assets/images/cleaning.png';

const Services = () => {
    return (
        <div className="content text-center vh-100">
            <h1>Delight in our services…</h1>
            <div className="row ">
                <div className="col-6 col-lg-3 " >
                    <div className="card" style={{ width: "100%", height: "100%" }} >
                        <div className="card-body">
                            <img src={manicure} alt="Manicure" style={{ width: "100px" }} />
                            <h2 className="card-title">Manicure</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={pedicure} alt="Pedicure" style={{ width: "100px" }} />
                            <h2 className="card-title">Pedicure</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={makeUp} alt="Make Up" style={{ width: "100px" }} />
                            <h2 className="card-title">Make Up</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={hairStyle} alt="Hairstyle" style={{ width: "100px" }} />
                            <h2 className="card-title">Hairstyle</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={hairCutting} alt="Hair Cutting" style={{ width: "100px" }} />
                            <h2 className="card-title">Hair Cutting</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={eyebrow} alt="Eyebrow Design" style={{ width: "100px" }} />
                            <h2 className="card-title">Eyebrow Design</h2>
                        </div>
                    </div>

                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={depilation} alt="Depilation" style={{ width: "100px" }} />
                            <h2 className="card-title">Depilation</h2>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <img src={cleaning} alt="Skin Cleaning" style={{ width: "100px" }} />
                            <h2 className="card-title">Skin Cleaning</h2>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Services;