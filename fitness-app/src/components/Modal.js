import React from "react";
import BookForm from "./BookForm";
import "../styles/Modal.css"

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div style={{display: "flex"}}>
          <span
            style={{ font: "4em san-serif", cursor: "pointer" }}
            className="close"
            onClick={onClose}
          >
            &times;
          </span>
          <BookForm />
        </div>

        {/* Add your form fields and logic here */}
      </div>
    </div>
  );
}

export default Modal;
