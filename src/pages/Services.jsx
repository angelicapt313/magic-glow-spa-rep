import React, { useEffect, useState } from "react";
import '../styles/services.css'
import ServicesCard from "../components/ServicesCard";



const Services = () => {
    const [servicesList, setServicesList] = useState([]);
    
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/services.json');
                const data = await response.json();
                setServicesList(data);
               
            } catch (error) {
                console.log('Error fetching the services data: ', error);
            }
        };

        fetchServices();

    }, []);

    return (
        <div>
            <h3 className="text-center m-4 services">Delight in our services.</h3>

            <div className="grid ">
                {servicesList.map(service => (
                    <ServicesCard key={service.id} service={service} />
                ))

                }
            </div>

        </div>

    )
}



export default Services;