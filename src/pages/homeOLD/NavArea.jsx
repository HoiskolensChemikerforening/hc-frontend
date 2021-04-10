import React  from "react";
import "../../index.css";
import styled, { css } from "styled-components";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import LogoSrc from "../../images/logo.png";
import { H1, Link } from "../../components/Text";

const NavArea = ({ isOpen, setOpen }) => {
  return (
    <Wrapper open={isOpen}>
      <TopWrapper>
        <LogoWrapper href="#">
          <Logo src={LogoSrc} />
        </LogoWrapper>
        <IconWrapper href="#" onClick={() => setOpen(false)}>
          <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
            <FiX />
          </IconContext.Provider>
        </IconWrapper>
      </TopWrapper>
      <LeftArea>
        <ItemWrapper>
          <Item href="#">
            <MenuText light>Kommende</MenuText>
            <MenuText bold>Datoer</MenuText>
          </Item>
          <Item href="#">
            <MenuText light>For</MenuText>
            <MenuText bold>Bedrifter</MenuText>
          </Item>
          <Item href="#">
            <MenuText light>HC</MenuText>
            <MenuText bold>Kontoret</MenuText>
          </Item>
          <Item href="#">
            <MenuText light>Ny</MenuText>
            <MenuText bold>Student</MenuText>
          </Item>
          <Item href="#">
            <MenuText bold>Bokskap</MenuText>
          </Item>
          <Item href="#">
            <MenuText bold>Kontakt</MenuText>
          </Item>
        </ItemWrapper>
      </LeftArea>
      <RightArea />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  ${props =>
    props.open &&
    css`
      display: flex;
      flex-direction: row;
    `}
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const TopWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  z-index: 2;
  @media only screen and (max-width: 992px) {
    margin: 20px 0;
    height: 60px;
  }
`;

const IconWrapper = styled(Link)`
  align-self: end;
  margin: 0 10%;
  height: 25px;
  padding:12.5px 15px;
  position: relative;
  right: -15px;
  text-decoration: none;
  &:visited {
    color: var(--gray-90);
  }
  @media only screen and (max-width: 992px) {
    padding: 15px;
    align-self: center;
  }
`;

const LogoWrapper = styled(Link)`
  margin: 0 10%;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width: 992px) {
    width: 60px;
    height: 60px;
  }
`;

const LeftArea = styled.div`
  height: 100vh;
  width: 60%;
  background-color: var(--primary);
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const RightArea = styled.div`
  height: 100vh;
  width: 40%;
  background-color: var(--white);
  z-index: 1;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const ItemWrapper = styled.div`
  margin: 0 10%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  flex-direction: row;
  margin: 10px;
`;

const MenuText = styled(H1)`
  padding-right: 10px;
  margin: 0;
  @media only screen and (max-width: 992px) {
    font-size: 1.5rem;
    padding-right: 7px;
  }
`;

export { NavArea };
