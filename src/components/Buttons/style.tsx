import styled from "styled-components";

type ButtonTypes = {
  color2?: string
};

export const ButtonPersonalized = styled.button<ButtonTypes>`
  background-color: ${props => `${props.color}`};
  width: 200px;
  height: 40px;
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: ${props => props.color2}
  }
`

