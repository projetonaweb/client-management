import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000083;
  position: absolute;
  z-index: 10;
  .modal {
    width: 1000px;
    height: 850px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    padding: 20px 60px;
    z-index: 20;
    h1 {
      color: #757575ca;
      margin: 10px 0;
      text-align: center;
    }
    .adress-client {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      #cep {
        width: 100%;
      }
      #number {
         width: 30%
      }
    }
  }
`