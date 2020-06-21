import React, { useState } from "react";
import styled, { css } from "styled-components";
import "../../index.css";

import { H1 } from "../../components/Text";
import { NavArea } from "./NavArea";
import LogoSrc from "../../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <LogoWrapper href="#">
          <Logo src={LogoSrc} />
        </LogoWrapper>
        <BorderWrap>
          <LogoText>
            <LogoP smallest light>
              HØISKOLENS
            </LogoP>
            <LogoP smallest bold>
              CHEMIKERFORENING
            </LogoP>
          </LogoText>
          <Items>
            <Item href="#">For bedrifter</Item>
            <Item href="#">Arrangementer</Item>
            <Item href="#">Linjeforeningen</Item>
          </Items>
        </BorderWrap>
        <IconWrapper href="#" onClick={() => setOpen(true)}>
          <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
            <FiMenu />
          </IconContext.Provider>
        </IconWrapper>
      </Nav>
      <NavArea isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

const Nav = styled.nav`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0;
  @media only screen and (max-width: 992px) {
    justify-content: space-between;
    margin: 20px 0;
    height: 60px;
  }
`;

const Items = styled.div`
  display: flex;
  align-self: end;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const Item = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  font-size: 14px;
  &:visited {
    color: var(--gray-90);
  }
  &:hover {
    background-color: var(--primary);
  }
`;

const BorderWrap = styled.div`
  display: flex;
  width: 75vw;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  #border-bottom: 2px solid var(--primary);
  @media only screen and (max-width: 992px) {
    width: 90vw;
    height: 60px;
`;

const IconWrapper = styled.a`
  align-self: end;
  height: 25px;
  padding: 0 0px 15px 30px;
  margin-right: 10%;
  text-decoration: none;
  &:visited {
    color: var(--gray-90);
  }
  @media only screen and (max-width: 992px) {
    padding: 0;
    align-self: center;
  }
`;

const LogoWrapper = styled.a`
  margin-left: 10%;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width: 992px) {
    width: 60px;
    height: 60px;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-self: center;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const LogoTextMobile = styled(LogoText)`
  display: none;
  font-size: 12px;
  @media only screen and (max-width: 992px) {
    display: flex;
  }
`;

const LogoP = styled(H1)`
  margin: 0;
  padding: 0;
`;

export { NavBar };
