import { useState } from "react";

import {
  NavbarContainer,
  NavbarHeading,
  NavImage,
  NavTemplesText,
  HamburgerMenus,
  MenuNames,
  LoginMenus,
  LoginOptions,
  HomeLink,
  AboutLink,
} from "./styledComponents";

const loginItems = [
  {
    id: 1,
    option: "Login",
  },
  {
    id: 2,
    option: "SignUp",
  },
  {
    id: 3,
    option: "Nearby Temples",
  },
];

const Navbar = () => {
  const [login, setLoginOption] = useState("");

  const onChangeOption = (event) => {
    setLoginOption(event.target.value);
  };

  const onChangeLoginPath = (event) => {
    const { history } = this.Props;
    switch (login) {
      case "Login":
        history.push("/login");
        break;
      case "SignUp":
        history.push("/signup");
        break;
      case "Nearby Temples":
        history.push("/nearby-temples");
        break;
      default:
        break;
    }
  };

  return (
    <NavbarContainer>
      <NavbarHeading to="/home">
        <NavImage
          src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711387639/tofi-logo_bd4bj9.png"
          alt="temple"
        />
        <NavTemplesText> Temples of India </NavTemplesText>
      </NavbarHeading>
      <HamburgerMenus>
        <HomeLink to="/home">
          <MenuNames> Home </MenuNames>
        </HomeLink>
        <MenuNames> Search </MenuNames>
        <MenuNames> NearbyTemples </MenuNames>
        <MenuNames> Add Temples </MenuNames>
        <AboutLink to="/aboutUs">
          <MenuNames> About </MenuNames>
        </AboutLink>

        <LoginMenus value={login} onChange={onChangeOption}>
          {loginItems.map((each) => (
            <LoginOptions key={each.id} onClick={onChangeLoginPath}>
              {" "}
              {each.option}
            </LoginOptions>
          ))}
        </LoginMenus>
      </HamburgerMenus>
    </NavbarContainer>
  );
};

export default Navbar;
