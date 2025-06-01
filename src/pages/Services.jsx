import React, { useEffect, useState } from "react";
import '../styles/services.css'
import ServicesCard from "../components/ServicesCard";
import { getAllServices } from "../services/serviceService";

const Services = ({ openModal }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const data = await getAllServices();
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold text-center my-6"> Delight in our services.</h3>
      <div className="flex justify-center w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
          {services.map((service) => (
            <ServicesCard
              key={service.rowKey}
              service={service}
              openModal={() => openModal(service)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}



export default Services;