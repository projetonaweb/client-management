import React from 'react'
import * as C from './style'


type ModalTypes = {
  setModal?: any,
  modal?: any
}

const Modal = ({ setModal, modal }: ModalTypes) => {

  return (
    <>
     {modal &&
      <C.ContainerModal onClick={modal && setModal(false)}>

    

      </C.ContainerModal>
    }
    </>
  )
}

export default Modal