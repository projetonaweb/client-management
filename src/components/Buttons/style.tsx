import styled from "styled-components";

export const ButtonPersonalized = styled.button`
  background-color: ${props => `${props.color}`};
  width: 200px;
  height: 40px;
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`

