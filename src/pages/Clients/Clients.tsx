import React, { useState } from "react";
import ClientsPanel from "../../components/ClientsPanel/ClientsPanel";
import Header from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import * as C from "./style";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Inputs } from "../../components/Inputs/Inputs";
import Modal from "../../components/ModalRegisterClients/ModalRegisterClients";
import type { EventTypes } from "../../types/EventTypes";

const Clients = () => {
  const [modal, setModal] = useState(false);

  const handleModal = ({ target }: EventTypes) => {
    target.id == "overlay" && setModal(false);
  };

  return (
    <>
      {modal && <Modal onClick={handleModal} setModal={setModal} />}
      <Header />
      <C.ContainerClients>
        <div className="client_panel">
          <Title message="Clientes cadastrados" />
          <div className="controls-area">
            <Inputs type="text" placeholder="Pesquise seu cliente" />
            <MdPersonAddAlt1 onClick={() => setModal(!modal)} />
          </div>
          <ClientsPanel />
        </div>
      </C.ContainerClients>
    </>
  );
};

export default Clients;
