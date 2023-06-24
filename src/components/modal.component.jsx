import React from "react";
import { useState } from "react";
import CardList from "./cardList.component";

const Modal = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <span id="modalButton" onClick={openModal}>Click here</span>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>X</span>
            <CardList cards={cards} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;