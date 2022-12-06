import React, { useEffect, useState, useContext } from "react";
import * as C from "./style";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";
import ModalClientsData from "../ModalClientsData/ModalClientsData";
import useClients from "../../hooks/useClients";

const ClientsPanel = () => {
  const pagination = false;
  const [modalClientsInfo, setModalClientsInfo] = useState(false);
  const [clientAdress, setClientAdress] = useState<any>([]);
  const [clientData, setClientData] = useState<any>([]);
  const [id, setId] = useState<any>();

  const { data: clientes, loading } = useClients();

  return (
    <>
      {modalClientsInfo && (
        <ModalClientsData
          setModalClientsInfo={setModalClientsInfo}
          id={id}
          clientData={clientData}
          clientAdress={clientAdress}
          loading={loading}
        />
      )}
      <C.ContainerClientsPanel>
        <ul className="clients-area">
          {loading && "Carregando..."}
          {clientes?.map(
            ({ id, nome, sobrenome, created_at, updated_at }, index: any) => (
              <li
                key={id}
                onClick={() => {
                  setId(id);
                  setModalClientsInfo(!modalClientsInfo);
                }}
                className="clients-itens"
              >
                <p>
                  <strong>Cliente:</strong> {nome} {sobrenome} {id}
                </p>
                <span>
                  <strong>Data: </strong>
                  {created_at}
                </span>
              </li>
            )
          )}
        </ul>
        {pagination && <C.ContainerPagination>1 2 3 4 5</C.ContainerPagination>}
      </C.ContainerClientsPanel>
    </>
  );
};

export default ClientsPanel;
