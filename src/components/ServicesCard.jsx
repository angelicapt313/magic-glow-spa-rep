import React, { useState } from "react";
import '../styles/servicesCard.css';

const ServicesCard = ({ service }) => {
    
    const [quantity, setQuantity] = useState(0);
 

    return (
        <div className=" card-css p-1 m-2 text-center" >
            <div className="card-body">
                <img src={(`../${service.image}`)} className="w-75" alt={service.name}/>
                <p className="card-title fw-bolder">{service.name}</p>
                <p className="card-price fw-bold">${service.price}</p>
            </div>
        </div>


    );
}



export default ServicesCard;