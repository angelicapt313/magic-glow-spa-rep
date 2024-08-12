import React, { useState } from "react";

const ServicesCard = ({ service }) => {
    
    const [quantity, setQuantity] = useState(0);
 

    return (
        <div className="card" style={{ width: 400 }}>
            <div className="card-body">
                <img src={(`../${service.image}`)} className="w-50" alt={service.name}/>
                <p>{service.name}</p>
                <p>${service.price}</p>
            </div>
        </div>


    );
}



export default ServicesCard;