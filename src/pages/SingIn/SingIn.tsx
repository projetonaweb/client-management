import * as C from "./style";
import people from "../../assets/login.png";
import { Title } from "../../components/Title/Title";
import { Inputs } from "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import type { EventTypes, FormTypes } from "../../types/EventTypes";
import { api } from "../../services/api";

export const SingIn = () => {
  const [user, setUser] = useState<String>();
  const [password, setPassword] = useState<String>("");
  const [remember, setRemember] = useState<Boolean>(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const handleLogin = async (e: FormTypes) => {
    e.preventDefault();
    await api
      .post("/login", {
        email: user,
        password: password,
      })
      .then((r) => {
        setToken(r.data.token);
        navigate("/");
      })
      .catch(({ response }) => setError(response.data.message));
  };

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
        <C.Form onSubmit={handleLogin}>
          <Title message="Insira seus dados" />
          <Inputs
            type="text"
            id="login"
            name="Login"
            placeholder="Insira seu usuario"
            value={user}
            handleOnChange={({ target }: EventTypes) => setUser(target.value)}
          />
          <Inputs
            type="password"
            id="password"
            name="Senha"
            placeholder="Digite sua senha"
            value={password}
            handleOnChange={({ target }: EventTypes) =>
              setPassword(target.value)
            }
          />
          {error && <p>Deu erro: {error}</p>}
          <C.PasswordForgot>
            <span>
              <input
                id="lembrar"
                type="checkbox"
                onChange={({ target }: EventTypes) =>
                  setRemember(target.checked)
                }
              />
              <label htmlFor="lembrar">Lembrar</label>
            </span>
            <Link to="a">Esqueceu sua senha?</Link>
          </C.PasswordForgot>

          <C.ButtonsContainer>
            <Buttons text="Entrar" color="#3ae264b5;" />
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
