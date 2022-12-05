import React from "react";
import { Inputs } from "../../components/Inputs/Inputs";
import { Title } from "../../components/Title/Title";
import * as C from "./style";
import { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
var validator = require('validator');

const SingUp = () => {
  const [name, setName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPasssword] = useState<String>("");
  const [passwordConfirm, setPassswordConfirm] = useState<String>("");
  const [cep, setCep] = useState<String>("");


  return (
    <C.ContainerRegister>
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
          handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value)}
        />
        
        <Inputs
          type="password"
          id="senha"
          name="Senha"
          value={password}
          placeholder="Digite sua senha"
          handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPasssword(target.value)
          }
        />
        <Inputs
          type="password"
          id="senha"
          name="Repita sua senha"
          value={passwordConfirm}
          placeholder="Digite sua senha novamente"
          handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPassswordConfirm(target.value)
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
        <div className="botao">
          <Buttons text="Enviar" color="#239c058d"
          color2="red" />
        </div>
      </C.ContainerSingUp>
    </C.ContainerRegister>
  );
};

export default SingUp;
