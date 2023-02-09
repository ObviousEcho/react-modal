import React from "react";
import "./style.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-tital">Modal Title</h4>
        </div>
        <div className="modal-body">Modal content here.</div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
