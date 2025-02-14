import React from "react";
import '../styles/home.css';
import magicVideo from '../assets/images/magicVideo.mp4';
import { Link } from "react-router-dom";
import Calendar from '../assets/images/calendar.png';

const Home = () => {
    return (

        <div className="h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                My crazy pink diary!
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-5xl">

                <section className="flex justify-center w-full md:w-1/2">
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-sm md:max-w-lg lg:max-w-xl p-6">
                        <video
                            src={magicVideo}
                            className="w-full rounded-lg"
                            autoPlay
                            loop
                            controls
                        />
                        <p className="text-2xl my-3 text-center italic">
                            It's glow o'clock!
                        </p>
                    </div>
                </section>

                <section className="text-center md:text-left w-full md:w-1/2">
                    <p className="text-lg mb-3">
                        My magic is crafted with dedication, quality, and care...
                    </p>
                    <p className="text-lg text-right mb-6">
                        Your glow awaits here.
                    </p>

                    <Link to="/services">
                        <button className="btn-reservation w-48 rounded-lg">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="calendar front ">
                                <img alt="button-reserv" src={Calendar} width={30} /> Reserva
                            </span>
                        </button>
                    </Link>
                </section>

            </div>
        </div>

    );
}

export default Home;