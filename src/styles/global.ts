import { createGlobalStyle } from "styled-components";

export const GlobalContainer = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Jost', sans-serif;
  }
  a {
    text-decoration: none;
  }
  input[type="text"], input[type="password"] {
    width: 100%;
      height: 45px;
      margin: 10px 0;
      border: 1px solid #00000057;
      border-radius: 10px;
      padding-left: 10px;
      &:focus {
        outline: none !important;
        border: 1px solid #719ECE;
        box-shadow: 0 0 3px #719ECE;
      }
  
  }
`;
