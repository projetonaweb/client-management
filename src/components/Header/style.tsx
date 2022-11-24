import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 90px;
  height: 100vh;
  background-color: #2C74E6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .user-section {
    .image-user {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-color: #9e9d9dbc;
      border: 2px solid white;
      margin-top: 30px;
      margin-bottom: 7px;
      cursor: pointer;
    }
  }
`

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  .icon {
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`