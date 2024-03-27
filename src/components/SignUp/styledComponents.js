import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const LoginTempleImage = styled.img`
  height: 130px;
  width: 130px;
`;

export const DownloadText = styled.h1`
  font-family: "Bree Serif";
  font-size: 65px;
  font-weight: 500;
  color: #668cff;
`;

export const LoginDetailsContainer = styled.div`
  height: 85%;
  width: 28%;
  box-shadow: 1px 2px 25px 5px #b3b3b3;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const LoginInContainer = styled.div`
  width: 86%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SignInGoogleButton = styled.button`
  background-color: #4d79ff;
  border: none;
  outline: none;
  width: 100%;
  height: 45px;
  font-size: 18px;
  font-weight: 550;
  color: #ffffff;
  border-radius: 3px;
  margin-bottom: 30px;
`;

export const HorizontalLine = styled.hr`
  color: #b3b3b3;
`;

export const NameInput = styled.input`
  width: 100%;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  height: 45px;
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 0px;
`;
export const EmailInput = styled.input`
  width: 100%;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  height: 45px;
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 0px;
`;

export const PhoneNumber = styled.input`
  width: 100%;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  height: 45px;
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 0px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  height: 45px;
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
  padding-left: 30px;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 0px;
`;

export const NotARobot = styled.div`
  width: 90%;
  border: 1px #b3b3b3 solid;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  margin-bottom: 30px;
`;

export const CheckBoxInput = styled.input`
  height: 20px;
  width: 20px;
`;
export const RobotText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #808080;
  padding-left: 0px;
`;
export const ReCaptchaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReCaptchaText = styled.p`
  color: #808080;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0px;
`;

export const PrivacyText = styled.p`
  color: #808080;
  font-size: 10px;
  font-weight: 300;
  margin-top: 0px;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SignUpButton = styled(Link)`
  height: 36px;
  width: 72px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  background-color: #e60026;
  box-shadow: 0.5px 2px 4px 3px #b3b3b3;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlreadyLogin = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginButton = styled(Link)`
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  background-color: none;
`;

export const ForgotPassword = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  font-family: "Roboto";
`;
