import React, { useEffect, useState } from "react";
import '../styles/services.css'
import ServicesCard from "../components/ServicesCard";
import InfoModal from "../components/InfoMondal";



const Services = () => {
    const [servicesList, setServicesList] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null)

    const openModal = (service) => {
        setSelectedService(service.id);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
    }

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

            <div className="row justify-content-center">
                {servicesList.map(service => (
                    <ServicesCard
                        key={service.id}
                        service={service}
                        className="col col-md-4"
                        openModal={() => openModal(service)} />
                ))
                }
            </div>
            {showModal && (<InfoModal service={selectedService} closeModal={closeModal} />)}

        </div>

    )
}



export default Services;