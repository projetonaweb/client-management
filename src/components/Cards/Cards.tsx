import React from 'react'
import * as C from './style'
import { Title } from '../Title/Title'
type CardsType = {
  quantidade: string,
  text: string
}
const Cards = ({quantidade, text}: CardsType) => {
  return (
    <>
      <C.ContainerCards>
        <h1>{quantidade}</h1>
        <p>{text}</p>
      </C.ContainerCards>
    </>
  )
}

export default Cards