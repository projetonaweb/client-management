import React from "react";
import { Inputs } from "../../components/Inputs/Inputs";
import { Title } from "../../components/Title/Title";
import * as C from "./style";
import { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import { appendFile } from "fs";
import { api } from "../../services/api";
import { FormTypes } from '../../types/EventTypes'
var validator = require('validator');

const SingUp = () => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPasssword] = useState<String>("");
  const [passwordConfirm, setPassswordConfirm] = useState<String>("");

  const handleSubmit = async (e: FormTypes) => {
    e.preventDefault()
    await api.post('/register', {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
      perfil: "1",
      imagem: "imagem1"
    })
  }

  return (
    <C.ContainerRegister>
      <C.ContainerSingUp onSubmit={handleSubmit}>
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
          id="senha-confirm"
          name="Repita sua senha"
          value={passwordConfirm}
          placeholder="Digite sua senha novamente"
          handleOnChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setPassswordConfirm(target.value)
          }
        />
        {password != passwordConfirm && <p>Passsword não confere</p>}

        <div className="botao">
          <Buttons text="Enviar" color="#239c058d"
          color2="red" />
        </div>
      </C.ContainerSingUp>
    </C.ContainerRegister>
  );
};

export default SingUp;
