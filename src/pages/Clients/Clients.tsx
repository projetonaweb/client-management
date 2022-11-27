import React from "react";
import ClientsPanel from "../../components/ClientsPanel/ClientsPanel";
import Header from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import * as C from './style'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { Inputs } from "../../components/Inputs/Inputs";


const Clients = () => {
  return (
    <>
      <Header />
      <C.ContainerClients>
        <div className="client_panel">
          <Title message="Clientes cadastrados" />
          <div className="controls-area">
            <Inputs type="text" placeholder="Pesquise seu cliente"/>
            <MdPersonAddAlt1 />
          </div>
          <ClientsPanel />
        </div>
      </C.ContainerClients>
    </>
  );
};

export default Clients;
