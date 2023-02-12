import React, { Component } from 'react'
import '../App.css'
import { ModalContext } from '../context/modal-context'
import Navbar from './Navbar'
import Overlay from './Overlay'
import Modal from './Modal'
import NavbarConsumer from './NavbarConsumer'
import OverlayConsumer from './OverlayConsumer'
import ModalConsumer from './ModalConsumer'

export default class ModalApp extends Component {
    constructor(props){
        super(props);

        this.setIsOpenModal = () => {
            this.setState({isOpen: true});
        }

        this.setIsCloseModal = () => {
            this.setState({isOpen: false});
        }

        this.state = {
            isOpen: false,
            setIsOpenModal: this.setIsOpenModal,
            setIsCloseModal: this.setIsCloseModal 
        };
    }
  render() {
    return (
      <>
        <ModalContext.Provider value={ this.state }>
            <NavbarConsumer />
            <OverlayConsumer/>
            <ModalConsumer/>
        </ModalContext.Provider>
        
      </>
    )
  }
}
