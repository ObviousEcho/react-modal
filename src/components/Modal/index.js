import React from "react";
import "./style.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div onClick={props.onClose} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="modal-header">
          <h4 className="modal-tital">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
