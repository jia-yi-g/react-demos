import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlbalContext } from './context';
const Modal = () => {
  const {closemodal,ismodal}=useGlbalContext()
  return (
    <div
      className={
        ismodal ? "show-modal modal-overlay" : "modal-overlay"
      }
    >
   
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button
          className="close-modal-btn"
          onClick={closemodal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal
