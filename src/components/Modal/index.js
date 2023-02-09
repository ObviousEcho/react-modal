import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onClose}
      className={`modal ${props.show ? "show" : ""}`}
    >
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
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
