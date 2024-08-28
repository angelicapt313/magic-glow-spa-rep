import React from "react";
import Form from "./Form";
import '../styles/InfoModal.css';
import { useForm } from "react-hook-form";

function InfoModal({ service, closeModal }) {
  
  const { handleSubmit, control } = useForm();

  if (!service) return null;

  const onSubmit = (data) => {
    closeModal();
  }

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-bottom-pill" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-body-secondary">Completa la siguiente información.</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <Form control={control} selectedService={service} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
              Confirmar Reservación.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;