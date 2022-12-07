import styled from "styled-components";

export const ContainerClients = styled.div`
  max-height: 100vh;
  .client_panel {
    h1 {
      margin-bottom: 30px;
    }
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .controls-area {
      input {
        width: 300px;
      }
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2.5rem;
      color: #82c782;
      cursor: pointer;
    }
  }
`