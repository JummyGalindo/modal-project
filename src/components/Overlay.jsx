import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class Overlay extends Component {
  render() {

    const { isOpen, setIsOpen } = this.context;
    return (
      <>
        <div onClick={() => setIsOpen(false)}
            className= {`overlay ${isOpen? "open" : ""}`}>
        </div>
      </>
    )
  }
}

Overlay.contextType = ModalContext;

export default Overlay
