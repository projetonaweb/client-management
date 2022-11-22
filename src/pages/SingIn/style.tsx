import styled from "styled-components";
import backImage from "../../assets/a.png";

export const SingUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const LeftSingUp = styled.div`
  width: 50vw;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.034);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #00000032;
  img {
    width: 100%;
  }
  p {
    padding: 10px 30px;
    text-align: center;
    color: #aaa;
  }
`;
export const RigthSingUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 200px;
  flex-direction: column;
  /* background-image: url(${backImage}); */
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: #00000040;
    margin-bottom: 50px;
  }
`;
export const Form = styled.form`
  width: 600px;
  h1 {
    text-align: center;
  }
`;

export const PasswordForgot = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #lembrar {
    margin-right: 4px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 40px 0;
  justify-content: space-around;
`;
