import React, { useState, useEffect } from "react";
import Form from "./Form";
import { useForm  } from "react-hook-form";
import AlertMessage from './AlertMessage';
import { useCart } from "../context/CartContext";
import { createAppointment } from "../services/appointmentService";
import { formatToUTC } from "../utils/formatToUTC";

function InfoModal({ service, closeModal }) {

  const { control, handleSubmit } = useForm();
  const { addAppointment } = useCart();

  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [messageType, setMessageType] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  // Evitar scroll en Services.jsx cuando el modal está abierto
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const onSubmit = async (data) => {
    const newAppointment = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      comments: data.comments,
      service: service.name,
      selectedDate: formatToUTC(data.selectedDate, data.selectedTime),
      selectedTime: data.selectedTime
    };

    try {
      await createAppointment(newAppointment);
      setMessageType("success");
    } catch (error) {
      setMessageType("error");
    }

    setFormVisible(false);
    setShowAlertMessage(true);

    setTimeout(() => {
      setShowAlertMessage(false);
      closeModal();
    }, 3000);

    // Guarda en carrito para vista previa
    addAppointment({ ...newAppointment });
  };

  if (!service) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="info-modal shadow-lg backdrop-blur-md w-full max-w-lg rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-400">
          {formVisible && (
            <>
              <h5 className="text-lg font-medium text-white-700">Completa la siguiente información.</h5>
              <button onClick={closeModal} type="button" className="text-lg text-gray-400 hover:text-gray-600" >✖</button>
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