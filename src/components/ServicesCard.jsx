import React from "react";
import '../styles/servicesCard.css';

const ServicesCard = ({ service, openModal }) => {

    return (
        <div className="card-css p-1 my-3 text-center flex" >
            <div className="card-body ">
                <img src={(`../${service.image}`)} className="w-75" alt={service.name} />
                <p className="card-title fw-bolder">{service.name}</p>

                <div className="button d-flex justify-content-end align-items-end">
                    <p className="card-price fw-bolder mx-2 mb-0">${service.price}</p>
                    <button onClick={openModal} className="btn btn-add text-center">+</button>
                </div>
            </div>


        </div>




    );
}



export default ServicesCard;