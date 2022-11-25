import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  background-color: aliceblue;
`;

export const ContainerPanel = styled.div`
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  height: 100vh;
  .container_cards {
    & > h1 {
      color: #181717c1;
      font-size: 1.5rem;
    }
  }
  .titulo {
    h1 {
      margin-top: 30px;
      font-size: 2.5rem;
      color: #181717c1;
    }
    .date {
      color: #575757e4;
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 50px;
    }
  }
  .cards {
    width: 70%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }


  .client_panel {
    & > h1 {
      margin-top: 30px;
      color: #575757e4;
      font-size: 1.5rem;
    }
  }
`;
