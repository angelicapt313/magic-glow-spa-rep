import React, { useEffect, useState } from "react";
import '../styles/services.css'
import ServicesCard from "../components/ServicesCard";

const Services = ({ openModal }) => {
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
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold text-center my-6">
                Delight in our services.
            </h3>

            <div className="flex justify-center w-full max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                    {servicesList.map((service) => (
                        <ServicesCard
                            key={service.id}
                            service={service}
                            openModal={() => openModal(service)}
                        />
                    ))}
                </div>
            </div>
        </div>


    )
}



export default Services;