import React from "react";

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
  NameInput,
  PhoneNumber,
  AlreadyLogin,
} from "./styledComponents";

const SignUp = () => {
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
          <NameInput type="text" placeholder="Name" />
          <EmailInput type="text" placeholder="Email" />
          <PhoneNumber type="number" placeholder="Phone" />
          <PasswordInput type="password" placeholder="Password" />
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
          </Buttons>
          <AlreadyLogin>
            <ForgotPassword> Already have an account ? </ForgotPassword>
            <LoginButton to="/login">Login</LoginButton>
          </AlreadyLogin>
        </LoginInContainer>
      </LoginDetailsContainer>
    </LoginPageContainer>
  );
};

export default SignUp;
