import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 90px;
  height: 100vh;
  background-color: #2c74e6;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s;
  cursor: pointer;
  position: absolute;
  &:hover {
    width: 200px;
    .people-icon,
    .print-icon,
    .configs-icon {
      transition: all 0.5s;
      .text-icons {
        display: block;
      }
    }
  }
  .user-section {
    margin-left: 10px;
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

  .people-icon,
  .print-icon,
  .configs-icon {
    width: 100%;
    display: flex;
    align-items: center;
    .icon {
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }
    .text-icons {
      border: 1px solid red;
      display: none;
      margin-left: 10px;
    }
  }
`;

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 400px;
  display: flex;
  padding-left: 10px;
  justify-content: space-around;
  flex-direction: column;
`;
