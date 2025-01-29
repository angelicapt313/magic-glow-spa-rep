import React from "react";
import CalendarComponent from './CalendarComponent';
import { Controller } from "react-hook-form";
import TimeComponent from './TimeComponent';
import { useCart } from '../context/CartContext';

const Form = ({ control, selectedService, selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {

    const { cartData } = useCart();

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
                                defaultValue={cartData[0]?.fullName || ""}
                                render={({ field }) =>
                                    <input type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Escribe tu nombre completo"
                                        {...field}
                                        required
                                    />}

                            />
                        </div>

                        <div className="mb-3 col-6">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={cartData[0]?.email || ""}
                                render={({ field }) =>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="tucorreo@ejemplo.com"
                                        {...field} />}
                                required

                            />
                        </div>
                    </div>

                    <div className=" gap-3 input-group">
                        <div className="mb-3 col-5">
                            <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue={cartData[0]?.phone || ""}
                                render={({ field }) =>
                                    <input type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="(123) 456-7890"
                                        {...field}
                                        required
                                    />}

                            />
                        </div>

                        <div className="mb-3 col-5">
                            <label htmlFor="service" className="form-label">Servicio Solicitado</label>
                            <Controller
                                name="service"
                                control={control}
                                defaultValue={selectedService.name || ""}
                                render={({ field }) =>
                                    <input type="text"
                                        className="form-control fw-medium"
                                        id="service"
                                        {...field}
                                        readOnly
                                    />}


                            />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="comments" className="form-label">Comentarios o Solicitudes Especiales</label>
                        <Controller
                            name="comments"
                            control={control}
                            defaultValue={cartData[0]?.comments || ""}
                            render={({ field }) =>
                                <textarea className="form-control"
                                    id="comments"
                                    rows="2"
                                    placeholder="Escribe aquí cualquier solicitud o comentario especial"
                                    {...field}>
                                </textarea>}

                        />
                    </div>

                    <div className="mb-3">
                        <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue={selectedDate}
                            render={({ field }) => (
                                <CalendarComponent
                                    selectedDate={field.value}
                                    onDateChange={field.onChange} />
                            )}
                        />
                    </div>

                    <div className="mb-3">
                        <Controller
                            name="selectedTime"
                            control={control}
                            defaultValue={selectedTime}
                            render={({ field }) => (
                                <TimeComponent
                                    selectedTime={field.value}
                                    onTimeChange={field.onChange}
                                />
                            )}
                        />
                    </div>



                </form >
            </div >
        </>
    )
}

export default Form;