import React from 'react'

export const ModalContext = React.createContext({
 isOpen: false,
 setIsOpenModal: () => { false },
 setIsCloseModal: () => { true }
})