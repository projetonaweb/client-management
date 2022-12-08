import React, { useState, useEffect } from "react";
import Buttons from "../Buttons/Buttons";
import { Inputs } from "../Inputs/Inputs";
import { Title } from "../Title/Title";
import * as C from "./style";
import type { EventTypes } from "../../types/EventTypes";
import { api } from "../../services/api";

type ModalType = {
  onClick: any;
  setModal: any;
};

const ModalRegisterClients = ({ onClick, setModal }: ModalType) => {
  const [name, setName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [userCpf, setUserCpf] = useState("");
  const [userCep, setUserCep] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userWhatsapp, setUserWhatsapp] = useState("");
  const [service, setService] = useState("");
  const [disableInput, setDisableInput] = useState(false);

  const date = new Date();
  const dateFormated = date.toLocaleString();


  const handleAddClient = async () => {
    await api.post('/clientes', { 
      nome: name,
      sobrenome: lastName,
      cpf: userCpf,
      created_at: dateFormated,
      updated_at: "TEST-RE-03T2",
      endereco: {
        cep: userCep,
        rua: userAdress,
        numero: userNumber,
        complemento: "casa",
        bairro: "cangaiba",
        cidade: "são paulo",
        estado: "SP",
        created_at: dateFormated,
        updated_at: "2022-12-03"
      },
      contato: {
        email: 'dev.rodrigomolina@gmail.com',
        telefone: 'userWhatsapp'
      },
      servico: {
        descricao: service,
        data: "2022-12-03",
        data_retorno: "2022-12-30"
      }
  })
    setModal(false);
  };

  const fetchCep = async (cep: any) => {
    if (cep.length >= 8) {
      const dataCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepJson = await dataCep.json();
      setUserAdress(cepJson.logradouro);
      setDisableInput(true);
    }
  };

  useEffect(() => {
    fetchCep(userCep);
  }, [userCep]);

  return (
    <>
      <C.ContainerModal id="overlay" onClick={onClick}>
        <div className="modal">
          <Title message="Digite os dados do seu cliente" />
          <Inputs
            handleOnChange={({ target }: EventTypes) => setName(target.value)}
            value={name}
            type="text"
            placeholder="Digite o nome do cliente"
            name="Nome do cliente: *"
          />

          <Inputs
            handleOnChange={({ target }: EventTypes) =>
              setLastName(target.value)
            }
            value={lastName}
            type="text"
            placeholder="Digite o sobrenome do cliente"
            name="Sobrenome: *"
          />

          <Inputs
            handleOnChange={({ target }: EventTypes) =>
              setUserCpf(target.value)
            }
            value={userCpf}
            type="number"
            placeholder="Digite o CPF"
            name="CPF:"
          />

          <div className="adress-client">
            <Inputs
              id="cep"
              handleOnChange={({ target }: EventTypes) =>
                setUserCep(target.value)
              }
              value={userCep}
              type="text"
              placeholder="Digite o CEP"
              name="CEP do cliente:"
            />

            <Inputs
              id="adress"
              handleOnChange={({ target }: EventTypes) =>
                setUserAdress(target.value)
              }
              value={userAdress}
              type="text"
              disabled={disableInput}
              placeholder="Digite o endereço"
              name="Endereço do cliente:"
            />

            <Inputs
              id="number"
              handleOnChange={({ target }: EventTypes) =>
                setUserNumber(target.value)
              }
              value={userNumber}
              type="number"
              placeholder="Numero"
              name="Numero:"
            />
          </div>

          <Inputs
            handleOnChange={({ target }: EventTypes) =>
              setUserWhatsapp(target.value)
            }
            value={userWhatsapp}
            type="number"
            placeholder="Digite o Whatsapp"
            name="Whatsapp do cliente: *"
          />

          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="services-area"
          >
            <label htmlFor="service">Digite os serviços prestados</label>
            <textarea
              onChange={({ target }) => setService(target.value)}
              value={service}
              style={{ resize: "none" }}
              name="service"
              id="service"
              cols={60}
              rows={10}
            ></textarea>
          </div>

          <Buttons
            onClick={handleAddClient}
            text="Enviar"
            color="#2ce706"
            color2="#1b8a05"
          />
        </div>
      </C.ContainerModal>
    </>
  );
};

export default ModalRegisterClients;
