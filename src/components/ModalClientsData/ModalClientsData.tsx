import React from "react";
import useClients from "../../hooks/useClient";
import { useFetch } from "../../hooks/useFetch";
import * as C from "./style";

const ModalClientsData = ({ setModalClientsInfo, clientAdress, id }: any) => {

  const { data: client, loading } = useClients(id);  

  const handleCloseModal = ({ target }: any) => {
    if (target.id == "overlay_modal_client") {
      setModalClientsInfo(false);
    }
  };
  
  return (
    <C.Overlay id="overlay_modal_client" onClick={handleCloseModal}>
      <C.ContainerModalClients>
        {loading && 'Carregando...'}
 
        <p>{client?.data.nome} {client?.data.sobrenome}</p>
        <p>{client?.data.cpf}</p>
        <p>{client?.data.created_at}</p>
      </C.ContainerModalClients>
    </C.Overlay>
  );
};

export default ModalClientsData;
