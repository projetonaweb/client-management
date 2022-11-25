import styled from "styled-components";

export const ContainerClientsPanel = styled.div`
  width: 90%;
  box-shadow: 1px 1px 3px #0000003d;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  .header-clients {
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
  }
  .clients-area {
    width: 100%;
    .clients-itens {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 1px solid #13131321;
    }
  }
`