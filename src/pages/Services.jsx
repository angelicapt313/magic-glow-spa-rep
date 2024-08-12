import React, {useEffect, useState} from "react";
import manicure from '../assets/images/manicure.png';
import pedicure from '../assets/images/pedicure.png';
import makeUp from '../assets/images/makeUp.png';
import hairStyle from '../assets/images/hairStyle.png';
import hairCutting from '../assets/images/hairCutting.png';
import eyebrow from '../assets/images/eyebrow.png';
import depilation from '../assets/images/depilation.png';
import cleaning from '../assets/images/cleaning.png';
import '../styles/services.css'



const Services = () => {
    const [servicesList, setServicesList] = useState([]);

    useEffect( () => {
        const fetchServices = async () => {
            try{
                const response = await fetch('/services.json');
                const data = await response.json();
                setServicesList(data);
            } catch(error) {
                console.log('Error fetching the services data: ', error);
            }
        };

        fetchServices();

    }, []);

    return (
        <div>
         <h3 className="text-center m-4 services">Delight in our services.</h3>
         <ul>
            {servicesList.map(item => (
             <li key={item.id}>{item.name}</li>             
            ))
            }
         </ul>
        </div>

    )
}



export default Services;