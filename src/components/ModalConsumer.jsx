import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class ModalConsumer extends Component {
  render() {
    return (
        <ModalContext.Consumer>
            {
                (value) => (
                    <div className={`modal ${value.isOpen ? "open" : ""}`}>
                        <button onClick={() => value.setIsCloseModal( false ) }>Close</button>
                        <h2>Side modal</h2>
                        <p>I am some text inside.</p>
                        
                    </div>
                )
            }
        </ModalContext.Consumer>
    )
  }
}

export default ModalConsumer
