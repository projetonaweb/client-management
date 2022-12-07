import React, { useEffect, useState, useContext } from "react";
import * as C from "./style";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";
import ModalClientsData from "../ModalClientsData/ModalClientsData";
import useClients from "../../hooks/useClients";
import { Link } from "react-router-dom";

const ClientsPanel = () => {
  const pagination = false;
  const [modalClientsInfo, setModalClientsInfo] = useState(false);
  const [clientAdress, setClientAdress] = useState<any>([]);
  const [clientData, setClientData] = useState<any>([]);

  const { data: clientes, loading } = useClients();
  
  return (
    <>

      <C.ContainerClientsPanel>
        <ul className="clients-area">
          {loading && "Carregando..."}
          {clientes?.map(
            ({ id, nome, sobrenome, created_at, updated_at }, index: any) => (
              <Link key={id} to={`/clients/${id}`}>
               <p>{nome}  {sobrenome} {id}</p> 
              </Link>
            )
          )}
        </ul>
        {pagination && <C.ContainerPagination>1 2 3 4 5</C.ContainerPagination>}
      </C.ContainerClientsPanel>
    </>
  );
};

export default ClientsPanel;
