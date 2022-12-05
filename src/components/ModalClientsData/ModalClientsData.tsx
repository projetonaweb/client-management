import React from "react";
import { useFetch } from "../../hooks/useFetch";
import * as C from "./style";

const ModalClientsData = ({ setModalClientsInfo, clientAdress, id }: any) => {

  const { clients, loading } = useFetch(`/endereco/${id}`);
  
  const handleCloseModal = ({ target }: any) => {
    if (target.id == "overlay_modal_client") {
      setModalClientsInfo(false);
    }
  };

  return (
    <C.Overlay id="overlay_modal_client" onClick={handleCloseModal}>
      <C.ContainerModalClients>
        {loading && 'Carregando...'}
        <p></p>
      </C.ContainerModalClients>
    </C.Overlay>
  );
};

export default ModalClientsData;
