import React from "react";

function InfoModal({ service, closeModal }) {

  if (!service) {
    return null;
  }


  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar Agregar</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {/* COMPONENTE FORM */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={closeModal}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;