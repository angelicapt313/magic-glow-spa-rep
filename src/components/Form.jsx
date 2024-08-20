import React, { useState } from "react";
import CalendarComponent from './CalendarComponent';

const Form = ({ selectedService }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: selectedService.name,
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div className="container h-100 mt-1">
                <form onSubmit={handleSubmit}>

                    <div className="gap-3 input-group">
                        <div className="mb-3 col-5">
                            <label htmlFor="fullName" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Escribe tu nombre completo"
                                required
                            />
                        </div>

                        <div className="mb-3 col-6">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>
                    </div>

                    <div className=" gap-3 input-group">
                        <div className="mb-3 col-5">
                            <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(123) 456-7890"
                                required
                                maxLength={10}
                            />
                        </div>

                        <div className="mb-3 col-5">
                            <label htmlFor="service" className="form-label">Servicio Solicitado</label>
                            <input
                                type="text"
                                className="form-control fw-medium"
                                id="service"
                                name="service"
                                value={formData.service}
                                readOnly
                            />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="comments" className="form-label">Comentarios o Solicitudes Especiales</label>
                        <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            rows="3"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder="Escribe aquí cualquier solicitud o comentario especial"
                        ></textarea>
                    </div>

                    <CalendarComponent />

                    <button type="submit" className="btn btn-primary">Enviar Reservación</button>
                </form>
            </div>
        </>
    )
}

export default Form;