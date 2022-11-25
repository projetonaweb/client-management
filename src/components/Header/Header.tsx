import React from 'react'
import * as C from './style'
import {  GoGear } from 'react-icons/go'
import {  BsFillPeopleFill } from 'react-icons/bs'
import {  AiOutlinePrinter } from 'react-icons/ai'

const Header = () => {
  return (
    <C.ContainerHeader>
      <div className="user-section">
        <div className="image-user">
          <img src="" alt="" />
        </div>
        <span>UserName</span>
      </div>

      <C.HeaderContainer>
        <div className="people-icon">
          <BsFillPeopleFill className='icon' />
          <p className='text-icons'>Clientes</p>
        </div>

        <div className="print-icon">
          <AiOutlinePrinter className='icon' />
          <p className='text-icons'>Imprimir</p>
        </div>

        <div className="configs-icon">
          <GoGear className='icon' />
          <p className='text-icons'>Configurações</p>
        </div>
      </C.HeaderContainer >
    </C.ContainerHeader>
  )
}

export default Header