import React from "react";
import '../styles/home.css';
import magicVideo from '../assets/images/magicVideo.mp4';
import { Link } from "react-router-dom";
import Calendar from '../assets/images/calendar.png';

const Home = () => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <h1 className="text-center m-4">My crazy pink diary! </h1>
            

                <div className="section d-md-flex justify-content-md-center align-items-md-center">

                    <section className="card" style={{width:350}}>
                        <div className="card-body ">
                            <video src={magicVideo} className="video-magic" autoPlay loop controls />
                            <p className="fs-4 m-3 text-center fst-italic">It's glow o'clock!</p>
                        </div>
                    </section>

                    <section className="info p-3 d-flex flex-column align-items-center">
                        <p className="text-center m-2">My <span className="fw-bolder">magic</span> is crafted with dedication, quality, and care... </p>
                        <p className="text-end">Your <span className="fw-bolder">glow</span> awaits here.</p>

                        <Link to="/services" >
                            <button className="text-center rounded-4">
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span className="calendar front text">
                                    <img src={Calendar} width={30} className="p-1" /> Reserva
                                </span>
                               
                            </button>
                        </Link>
                    </section>
                </div>


            

        </div>
    );
}

export default Home;