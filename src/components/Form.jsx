import React, { useState } from "react";

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
            <div className="container mt-1">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Nombre Completo <span className="form-text">(Opcional)</span></label>
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

                    <div className="mb-3">
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

                    <div className="mb-3">
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
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">Servicio Solicitado</label>
                        <input
                            type="text"
                            className="form-control"
                            id="service"
                            name="service"
                            value={formData.service}
                            readOnly
                        />
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

                    <button type="submit" className="btn btn-primary">Enviar Reservación</button>
                </form>
            </div>
        </>
    )
}

export default Form;