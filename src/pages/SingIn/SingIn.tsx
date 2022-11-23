import * as C from "./style";
import people from "../../assets/login.png";
import { Title } from "../../components/Title/Title";
import { Inputs } from "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import React, { ChangeEvent, useState } from "react";

type EventTypes = ChangeEvent<HTMLInputElement>

export const SingIn = () => {
  const [user, setUser] = useState<String>()
  const [password, setPassword] = useState<String>('')
  const [remember, setRemember] = useState<Boolean>(false)

  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const handleUserInput = ({ target }: EventTypes) => setUser(target.value)
  const handlePasswordInput = ({ target }: EventTypes) => setPassword(target.value)
  const handleRemember = (e: EventTypes) => setRemember(e.target.checked)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => event.preventDefault()

  const handleLogin = async () => { // AQUI SERA UMA REQUISIÇÃO GET PARA VERIFICAR SE TEM O USUARIO CADASTRADO
    await fetch('http://localhost:8000/usuarios', {
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          user,
          password,
          remember
        }),
      })
  }

  return (
    <C.SingUpContainer>
      <C.LeftSingUp>
        <img src={people} />
        <h2>Um sistema foda pra caralho</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non
          facere numquam officia dignissimos voluptatem! Earum esse ea quae
          libero delectus, ipsa velit perspiciatis aliquid pariatur omnis ipsam
          explicabo repellat?
        </p>
      </C.LeftSingUp>

      <C.RigthSingUp>
        <C.Form onSubmit={handleSubmit}>
          <Title message="Insira seus dados" />
          <Inputs
            type="text"
            id="login"
            name="Login"
            placeholder="Insira seu usuario"
            value={user}
            handleOnChange={handleUserInput}
          />
          <Inputs
            type="password"
            id="password"
            name="Senha"
            placeholder="Digite sua senha"
            value={password}
            handleOnChange={handlePasswordInput}
          />

          <C.PasswordForgot>
            <span>
              <input id="lembrar" type="checkbox" onChange={handleRemember}/>
              <label htmlFor="lembrar">Lembrar</label>
            </span>
            <Link to="a">Esqueceu sua senha?</Link>
          </C.PasswordForgot>

          <C.ButtonsContainer>
            <Buttons 
              text="Entrar"
              color="#3ae264b5;"
              onClick={handleLogin}
            />
            <Buttons
              onClick={handleRegister}
              text="Registrar"
              color="#1e90dbb7;"
            />
          </C.ButtonsContainer>
        </C.Form>
      </C.RigthSingUp>
    </C.SingUpContainer>
  );
};
