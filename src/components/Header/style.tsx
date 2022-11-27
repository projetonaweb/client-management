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
  z-index: 10;

  &:hover {
    width: 180px;
    &:hover
    .container-icon {
      .text-icons {
        opacity: 1;
      }
    }
    &:hover .user-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .user-section {
    margin-left: 10px;
    color: #ffffffb7;
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
  
  .container-icon {
    display: flex;
    align-items: center;
    transition: all .3s;
    width: 100%;
    height: 50px;
    padding-left: 10px;
    &:hover {
      background-color: #4d8cf0;
    }
    .icon {
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      color: #ffffffca;
      cursor: pointer;
    }
    .text-icons {
      transition: all .3s;
      opacity: 0;
      margin-left: 20px;
      font-weight: 400;
    }
  }
  `;

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  `;
