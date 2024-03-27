import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 25%;
`;

export const NavbarHeading = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-decoration: none;
`;
export const NavImage = styled.img`
  height: 50px;
  width: 50px;
`;
export const NavTemplesText = styled.h1`
  color: #000000;
  font-size: 25px;
`;
export const HamburgerMenus = styled.div`
  display: flex;
  margin: 10px;
`;
export const MenuNames = styled.div`
  color: #000000;
  font-size: 16px;
  align-items: center;
  font-weight: 500;
  margin: 10px;
  text-decoration: none;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;
export const AboutLink = styled(Link)`
  text-decoration: none;
`;
export const LoginMenus = styled.select`
  border: none;
  outline: none;
  font-size: 16px;
  align-items: center;
  font-weight: 500;
`;

export const LoginOptions = styled.option``;
