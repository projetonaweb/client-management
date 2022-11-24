import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  background-color: aliceblue;
`;

export const ContainerPanel = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  height: 100vh;
  .titulo {
    h1 {
      margin-top: 30px;
      font-size: 2.5rem;
      color: #6b6b6bdc;
    }
    .date {
      color: #6b6b6bdc;
    }
  }
  .cards {
    width: 70%;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
  }
`;
