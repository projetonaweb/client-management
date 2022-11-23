import styled from "styled-components";
import notfound from '../../assets/notfound.jpg'

export const ContainerError = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${notfound});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`