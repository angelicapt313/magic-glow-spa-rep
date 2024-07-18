import React from "react";
import '../styles/home.css';
import magicVideo from '../assets/images/magicVideo.mp4';

const Home = () => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <h1 className="text-center m-4">My crazy pink diary! </h1>
            <div className="row">
                <div className="section d-md-flex justify-content-md-center align-items-md-center">
                    <section className="card mx-auto">
                        <div className="card-body mx-auto my-auto">
                            <video src={magicVideo} className="video-magic" autoPlay loop controls />
                            <p className="fs-4 m-3 text-center fst-italic">It's glow o'clock!</p>
                        </div>
                    </section>

                    <section className="texts">
                        <p className="text-center m-2">My <span className="fw-bolder">magic</span> is crafted with dedication, quality, and care... </p>
                        <p className="text-end">Your <span className="fw-bolder">glow</span> awaits here.</p>
                    </section>
                </div>


            </div>

        </div>
    );
}

export default Home;