import React, { useState, useEffect } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";
import AlertMessage from './AlertMessage';
import { useCart } from "../context/CartContext";
import { getAppointments, createAppointment } from "../services/reservations";

function InfoModal({ service, closeModal }) {

  const { handleSubmit, control } = useForm();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const [formVisible, setFormVisible] = useState(true);

  const [messageType, setMessageType] = useState("");

  const [selectedTime, setSelectedTime] = useState("");

  const { addAppointment } = useCart();

  // Evitar scroll en Services.jsx cuando el modal está abierto
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);


  if (!service) return null;

  const onSubmit = async (data) => {


    await createAppointment(data);

    // Lógica de reservación
    // Simulamos la operación exitosa
    const isSuccess = true;

    if (isSuccess) {
      setMessageType("success");
    } else {
      setMessageType("error");
    }

    // Ocultar el formulario, después mostrar la alerta
    setFormVisible(false);

    // Mostrar Alerta después de confirmar reservación
    setShowAlertMessage(true);

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      setShowAlertMessage(false);
      // Cerrar el modal después de ocultar la alerta
      closeModal();
    }, 3000)

    // Añadir datos al array incluyendo el servicio seleccionado
    const newAppointment = {
      id: service.id,
      service: service.name,
      image: service.image,
      fullName: data.fullName,
      selectedDate: data.selectedDate,
      selectedTime: data.selectedTime,
      status: 'Confirmado'
    };

    addAppointment(newAppointment);

  }

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="info-modal shadow-lg backdrop-blur-md w-full max-w-lg rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-400">
          {formVisible && (
            <>
              <h5 className="text-lg font-medium text-white-700">Completa la siguiente información.</h5>

              <button
                type="button"
                className="text-lg text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                ✖
              </button>
            </>
          )}
        </div>

        {/* Body */}
        <div className="p-2">
          {formVisible ? (
            <Form
              control={control}
              selectedService={service}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          ) : messageType === "success" ? (
            <AlertMessage message="Reservación Confirmada." type="success" />
          ) : (
            <AlertMessage message="Ocurrió un error, inténtelo más tarde." type="error" />
          )}
        </div>

        {/* Footer */}
        {formVisible && (
          <div className="p-4 border-t border-gray-400 flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleSubmit(onSubmit)}
            >
              Confirmar Reservación
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoModal;