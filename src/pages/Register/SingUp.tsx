import React from "react";
import { Inputs } from "../../components/Inputs/Inputs";
import { Title } from "../../components/Title/Title";
import * as C from "./style";
import { useState } from "react";

const SingUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  return (
    <C.ContainerSingUp>
      <Title message="Digite seus dados para se cadastrar" />
 
      <Inputs
        type="text"
        id="name"
        name="Nome"
        value={name}
        placeholder="Digite seu nome"
        handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setName(target.value)
      }
      />

      <Inputs
        type="text"
        id="lastname"
        name="Sobrenome"
        value={lastName}
        placeholder="Digite seu sobrenome"
        handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setLastName(target.value)
        }
      />

      <Inputs
        type="text"
        id="email"
        name="Email"
        value={email}
        placeholder="Digite seu email"
        handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(target.value)
        }
      />

      <Inputs
        type="text"
        id="cep"
        name="CEP"
        value={cep}
        placeholder="Digite seu CEP"
        handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setCep(target.value)
        }
      />
    </C.ContainerSingUp>
  );
};

export default SingUp;
