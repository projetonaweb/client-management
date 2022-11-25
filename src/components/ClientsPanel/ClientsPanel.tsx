import React from "react";
import * as C from "./style";

const ClientsPanel = () => {
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
            <span>Produção de graos</span>
            <span>22/08/2022</span>
          </li>
          <li className="clients-itens">Fabricio
            <span>Produção de borracha</span>
            <span>22/08/2022</span>
          </li>
          <li className="clients-itens"> Robson
            <span>Produção de ferros</span>
            <span>22/08/2022</span>
          </li>
        </ul>
      </C.ContainerClientsPanel>
    </>
  );
};

export default ClientsPanel;
