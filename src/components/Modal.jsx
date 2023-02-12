import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class Modal extends Component {
  render() {
    return (
      <>
        <div className={`modal ${isOpen ? "open" : ""}`}>
        <h2>Side modal</h2>
        <p>I am some text inside.</p>
        </div>
      </>
    )
  }
}

Modal.contextType = ModalContext;

export default Modal
