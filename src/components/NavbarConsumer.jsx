import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class NavbarContext extends Component {
  render() {
    return (
      <ModalContext.Consumer>
        {(value) => (
            <nav className="navbar">
            <button>Home</button>
            <button>Settings</button>
            <button>Build</button>
            <button onClick={ () => value.setIsOpenModal(true) }>More</button>
            </nav>
        )}
      </ModalContext.Consumer>
    )
  }
}

export default NavbarContext
