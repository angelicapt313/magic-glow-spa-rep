import React from "react";
import CalendarComponent from './CalendarComponent';
import { Controller } from "react-hook-form";
import TimeComponent from './TimeComponent';
import { useCart } from '../context/CartContext';

const Form = ({ control, selectedService, selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {

    const { cartData } = useCart();

    return (
        <>
    
            <div className="max-w-2xl mx-auto px-4 py-6">
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue={cartData[0]?.fullName || ""}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="mt-1 block w-full rounded-md "
                                        placeholder="Escribe tu nombre completo"
                                        {...field}
                                        required
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo Electrónico
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={cartData[0]?.email || ""}
                                render={({ field }) => (
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md"
                                        placeholder="tucorreo@ejemplo.com"
                                        {...field}
                                        required
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Número de Teléfono
                            </label>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue={cartData[0]?.phone || ""}
                                render={({ field }) => (
                                    <input
                                        type="number"
                                        id="phone"
                                        className="mt-1 block w-full rounded-md "
                                        placeholder="(123) 456-7890"
                                        {...field}
                                        required
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                Servicio Solicitado
                            </label>
                            <Controller
                                name="service"
                                control={control}
                                defaultValue={selectedService.name || ""}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="service"
                                        className="mt-1 block w-full rounded-md"
                                        {...field}
                                        readOnly
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                            Comentarios o Solicitudes Especiales
                        </label>
                        <Controller
                            name="comments"
                            control={control}
                            defaultValue={cartData[0]?.comments || ""}
                            render={({ field }) => (
                                <textarea
                                    id="comments"
                                    rows="2"
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Escribe aquí cualquier solicitud o comentario especial"
                                    {...field}
                                ></textarea>
                            )}
                        />
                    </div>

                    <div>
                        <Controller
                            name="selectedDate"
                            control={control}
                            defaultValue={selectedDate}
                            render={({ field }) => (
                                <CalendarComponent selectedDate={field.value} onDateChange={field.onChange} />
                            )}
                        />
                    </div>

                    <div>
                        <Controller
                            name="selectedTime"
                            control={control}
                            defaultValue={selectedTime}
                            render={({ field }) => (
                                <TimeComponent selectedTime={field.value} onTimeChange={field.onChange} />
                            )}
                        />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form;