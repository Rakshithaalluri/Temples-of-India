import React, { useState } from "react";
import Cookies from "universal-cookie";

import {
  LoginPageContainer,
  LoginImageContainer,
  LoginTempleImage,
  DownloadText,
  LoginInContainer,
  EmailInput,
  PasswordInput,
  NotARobot,
  CheckBoxInput,
  RobotText,
  ReCaptchaContainer,
  ReCaptchaText,
  PrivacyText,
  ForgotPassword,
  LoginDetailsContainer,
  SignInGoogleButton,
  Buttons,
  SignUpButton,
  LoginButton,
  HorizontalLine,
  UsersFormData,
} from "./styledComponents";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeUserMail = (event) => {
    setUserMail(event.target.value);
  };

  const onChangeUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const onSubmitLoginDetails = async (event) => {
    event.preventDefault();
    try {
      const userDetails = {
        email: userMail,
        password: userPassword,
      };
      const url = "/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        const cookies = new Cookies();
        cookies.set("jwt_token", data.jwt_token, {
          expires: 30,
          path: "/home",
        });
      } else {
        console.log("Jwt_error_msg");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginImageContainer>
        <LoginTempleImage
          src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711387639/tofi-logo_bd4bj9.png"
          alt="temple"
        />
        <DownloadText> Download on Play Store </DownloadText>
      </LoginImageContainer>
      <LoginDetailsContainer>
        <LoginInContainer>
          <SignInGoogleButton>Sign in with google</SignInGoogleButton>
          <HorizontalLine />
          <UsersFormData onSubmit={onSubmitLoginDetails}>
            <EmailInput
              type="text"
              placeholder="Email"
              onChange={onChangeUserMail}
              value={userMail}
            />
            <PasswordInput
              type="password"
              placeholder="Password"
              onChange={onChangeUserPassword}
              value={userPassword}
            />
            <NotARobot>
              <CheckBoxInput type="checkbox" />
              <RobotText>I'm not a robot </RobotText>
              <ReCaptchaContainer>
                <ReCaptchaText>reCAPTCHA</ReCaptchaText>
                <PrivacyText>Privacy - Terms </PrivacyText>
              </ReCaptchaContainer>
            </NotARobot>
            <Buttons>
              <SignUpButton to="/signup"> SIGNUP </SignUpButton>
              <LoginButton to="/home"> LOGIN </LoginButton>
            </Buttons>
          </UsersFormData>
          <ForgotPassword> Forgot Password ? </ForgotPassword>
        </LoginInContainer>
      </LoginDetailsContainer>
    </LoginPageContainer>
  );
};

export default Login;
