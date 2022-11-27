import styled from "styled-components";

export const ContainerClientsPanel = styled.div`
  width: 80vw;
  box-shadow: 1px 1px 3px #0000003d;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  .header-clients {
    height: 30px;
    margin-right: 55px;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
  }
  .clients-area {
    width: 100%;
    .clients-itens {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 10px;
      border-bottom: 1px solid #13131321;
      cursor: pointer;
      &:hover {
        border-radius: 5px;
        background-color: #63a5f139;
      }
      .service {
        width: 700px;
        text-align: center;
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