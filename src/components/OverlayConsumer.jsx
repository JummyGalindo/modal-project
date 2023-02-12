import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class OverlayConsumer extends Component {
  render() {
    return (
      <ModalContext.Consumer>
        {
            (value) => (
                <div 
                    onClick={ () => value.setIsCloseModal( false) }
                    className= {`overlay ${ value.isOpen ? "open" : ""}`}
                    />
            )
        }
      </ModalContext.Consumer>
    )
  }
}


export default OverlayConsumer