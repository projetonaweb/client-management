import React from "react";
import useAdress from "../../hooks/useAdress";
import useClients from "../../hooks/useClient";
import { useFetch } from "../../hooks/useFetch";
import * as C from "./style";

const ModalClientsData = ({ setModalClientsInfo, clientAdress, id }: any) => {

  const { data: client, loading } = useClients(id);  
  const { data: userAdress } = useAdress(id)

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

        <p>{userAdress?.data.rua}</p>
        <p>{userAdress?.data.numero}</p>
        <p>{userAdress?.data.cidade}</p>
        <p>{userAdress?.data.bairro}</p>
        <p>{userAdress?.data.estado}</p>
        <p>{userAdress?.data.complemento}</p>
        <p>{userAdress?.data.cep}</p>
      </C.ContainerModalClients>
    </C.Overlay>
  );
};

export default ModalClientsData;
