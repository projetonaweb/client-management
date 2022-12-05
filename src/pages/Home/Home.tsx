import React, { useContext } from 'react'
import Cards from '../../components/Cards/Cards'
import Charts from '../../components/Charts/Charts'
import Header from '../../components/Header/Header'
import { Title } from '../../components/Title/Title'
import { useFetch } from '../../hooks/useFetch'
import * as C from './style'

const Home = () => {
  const name = 'Rodrigo'
  const clientRegisteredQtd = useFetch('/clientes')

  const date = new Date()
  const dateFormated = date.toLocaleDateString()

  return (
    <C.ContainerHome>
      <div className="header">
        <Header />
      </div>

      <C.ContainerPanel>
        <div className="titulo">
          <Title message={`Bem vindo ${name}`} />
          <h4 className='date'>{dateFormated}</h4>
        </div>

        <div className="container_cards">
          <Title message="Estatisticas" />
          <div className="cards">
            <Cards text="Clientes cadastrados" quantidade={clientRegisteredQtd.clients.length}/>
            <Cards text="Clientes maconheiros" quantidade="24"/>
            <Cards text="Clientes macumbeiros" quantidade="13"/>
          </div>
        </div>


        <Charts />
      </C.ContainerPanel>
      
    </C.ContainerHome>
  )
}

export default Home