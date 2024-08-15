import React from "react";

function InfoModal({ show, handleClose }) {

  if (!show) {
    return null;
  }


  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-fullscreen" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar Agregar</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClose}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      );
}

      export default InfoModal;