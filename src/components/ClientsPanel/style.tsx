import styled from "styled-components";

export const ContainerClientsPanel = styled.div`
  width: 85vw;
  height: 80vh;
  overflow: hidden;
  box-shadow: 1px 1px 3px #0000003d;
  border-radius: 10px;
  padding: 20px;
  background-color: white;

  .clients-area {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 180px;
      border: 1px solid red;
      padding: 20px 10px;
      color: red;
      border-bottom: 1px solid #13131321;
    }

    .clients-itens {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 180px;
      border: 1px solid red;
      padding: 20px 10px;
      border-bottom: 1px solid #13131321;
      cursor: pointer;
      &:hover {
        border-radius: 5px;
        background-color: #63a5f139;
      }

    }
  }
`

export const ContainerPagination = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c74e6;
  font-weight: 500;
`