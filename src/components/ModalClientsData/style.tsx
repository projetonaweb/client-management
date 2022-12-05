import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000065;
  position: absolute;
  inset: 0;
  z-index: 19;
`

export const ContainerModalClients = styled.div`
position: absolute;
  z-index: 20;
  width: 900px;
  height: 600px;
  background-color: #e4e3e3;
  border-radius: 10px;
`