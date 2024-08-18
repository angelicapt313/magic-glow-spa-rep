import React from "react";
import Form from "./Form";
import '../styles/InfoModal.css';

function InfoModal({ service, closeModal }) {

  if (!service) return null;


  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered rounded-bottom-pill" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-body-secondary">Completa la siguiente información.</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <Form selectedService={service} />
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={closeModal}>
              Confirmar
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;