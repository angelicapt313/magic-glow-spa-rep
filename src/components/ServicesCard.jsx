import React from "react";
import '../styles/servicesCard.css';

const ServicesCard = ({ service, openModal }) => {

    return (
        <div className="w-full sm:w-[250px] h-auto rounded-2xl bg-transparent shadow-lg backdrop-blur-md 
                        transition-transform hover:bg-dark-purple hover:translate-y-[-5px] p-2 flex flex-col justify-between">

            <div className="flex flex-col items-center">
                <img src={`../${service.image}`} className="w-[75%] rounded-lg" alt={service.name} />
                <p className="text-black font-bold text-lg">
                    {service.name}
                </p>
            </div>

            <div className="flex justify-end items-center gap-2">
                <p className="text-gray-500 font-semibold text-sm">
                    ${service.price}
                </p>
                <button
                    onClick={openModal}
                    className="bg-custom-purple bg-gray-300 rounded-lg shadow-inner cursor-pointer text-lg px-3 py-1 
                               transition-all hover:text-black hover:border-none">
                    +
                </button>
            </div>
        </div>


    );
}



export default ServicesCard;