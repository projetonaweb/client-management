import React from "react";
import * as C from "./style";

const ClientsPanel = () => {
  const pagination = true

  return (
    <>
      <C.ContainerClientsPanel>
        <ul className="header-clients">
          <li>Clientes</li>
          <li>Serviços</li>
          <li>Data</li>
        </ul>

        <ul className="clients-area">
          <li className="clients-itens">
            Miranda
            <span className="service">Produção de graos</span>
            <span>22/08/2022</span>
          </li>
          <li className="clients-itens">
            Miranda
            <span className="service">Produção de graos</span>
            <span>22/08/2022</span>
          </li>
          <li className="clients-itens">
            Miranda
            <span className="service">Produção de graos</span>
            <span>22/08/2022</span>
          </li>
          <li className="clients-itens">
            Miranda
            <span className="service">Produção de graos</span>
            <span>22/08/2022</span>
          </li>
        </ul>
        {pagination && 
          <C.ContainerPagination>
            1 2 3 4 5 
          </C.ContainerPagination>
        }
      </C.ContainerClientsPanel>
    </>
  );
};

export default ClientsPanel;
