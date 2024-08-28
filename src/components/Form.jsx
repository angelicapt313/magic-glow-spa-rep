import React, { useState } from "react";
import CalendarComponent from './CalendarComponent';
import { Controller } from "react-hook-form";

const Form = ({ control, selectedService }) => {

    return (
        <>
            <div className="container h-100 mt-1">
                <form>

                    <div className="gap-3 input-group">
                        <div className="mb-3 col-5">
                            <label htmlFor="fullName" className="form-label">Nombre</label>
                            <Controller
                                name="fullName"
                                control={control}
                                render={({ field }) =>
                                    <input type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Escribe tu nombre completo"
                                        required {...field}
                                    />}

                            />
                        </div>

                        <div className="mb-3 col-6">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <input type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    required />}

                            />
                        </div>
                    </div>

                    <div className=" gap-3 input-group">
                        <div className="mb-3 col-5">
                            <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => <input type="number"

                                    className="form-control"
                                    id="phone"
                                    placeholder="(123) 456-7890"
                                    required
                                />}

                            />
                        </div>

                        <div className="mb-3 col-5">
                            <label htmlFor="service" className="form-label">Servicio Solicitado</label>
                            <Controller
                                name="service"
                                control={control}
                                render={({ field }) => <input type="text"
                                    className="form-control fw-medium"
                                    id="service"
                                    defaultValue={selectedService.name}
                                    readOnly />}

                            />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="comments" className="form-label">Comentarios o Solicitudes Especiales</label>
                        <Controller
                            name="comments"
                            control={control}
                            render={({ render }) => <textarea className="form-control"
                                id="comments"
                                rows="3"
                                placeholder="Escribe aquí cualquier solicitud o comentario especial">
                            </textarea>}

                        />
                    </div>

                    <CalendarComponent />
                </form>
            </div>
        </>
    )
}

export default Form;