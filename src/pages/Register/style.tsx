import styled from "styled-components";
import backgroundImage from '../../assets/a.png'

export const ContainerRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  `

export const ContainerSingUp = styled.form`
  width: 100vw;
  max-width: 800px;
  padding: 20px 100px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 10px #0000001f;
  h1 {
    margin-bottom: 70px;
    text-align: center;
  }
  .botao {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin-top: 20px;
      transition: all .3s;
    }
  }
`