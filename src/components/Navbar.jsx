import React, { Component } from 'react'
import { ModalContext } from '../context/modal-context'

class Navbar extends Component {
  render() {

    //const { setIsOpen } = this.context;
    return (
        <>
            <nav className="navbar">
            <button>Home</button>
            <button>Settings</button>
            <button>Build</button>
            <button onClick={ () => setIsOpen(true)}>More</button>
            </nav>
      </>
    )
  }
}
Navbar.contextType = ModalContext

export default Navbar

