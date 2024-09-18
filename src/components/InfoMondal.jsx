import React, { useState } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";
import AlertMessage from './AlertMessage';
import '../styles/InfoModal.css';

function InfoModal({ service, closeModal }) {

  const { handleSubmit, control } = useForm();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [formDataArray, setFormDataArray] = useState([]);

  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const [formVisible, setFormVisible] = useState(true);


  if (!service) return null;

  const onSubmit = (data) => {

    // Lógica de reservación

    // Ocultar el formulario, después mostrar la alerta...
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
    setFormDataArray([...formDataArray, { ...data, service: service.name, selectedDate }]);

  }

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-bottom-pill" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {formVisible && (
              <>
              <h5 className="modal-title text-body-secondary">Completa la siguiente información.</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
              </> 
            )}
          </div>

          <div className="modal-body h-100">
            {/* Mostrar Form o Alerta */}
            {formVisible ? (
              <Form
                control={control}
                selectedService={service}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            ) : (
              // Mostrar Alerta en lugar del Formulario
              <AlertMessage message="Reservación Confirmada" type="success" />
            )}
          </div>
          <div className="modal-footer">
            {formVisible && (

              <button type="button" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                Confirmar Reservación.
              </button>

            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoModal;