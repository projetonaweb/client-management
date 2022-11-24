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
        <BsFillPeopleFill className='icon' />
        <AiOutlinePrinter className='icon' />
        <GoGear className='icon' />
      </C.HeaderContainer >
    </C.ContainerHeader>
  )
}

export default Header