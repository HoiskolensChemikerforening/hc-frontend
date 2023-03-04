import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H2 } from "../Text"; 
import { BiX } from "react-icons/bi";
import { NavLogo } from "./NavLogo";

const DropdownMenu = (props) => (
    <DropdownBox open={props.isOpen}>
        <Nav>
            <NavLogo/>
            <Close onClick={() => props.setOpen(false)}><BiX/></Close>
        </Nav>
        <WrapperPages>
            <Linker to="/"  onClick={() => props.setOpen(false)}>
                <DropItem>FORSIDEN</DropItem></Linker>
            <Linker to="/arrangement"   onClick={() => props.setOpen(false)}>
                <DropItem>ARRANGEMENT</DropItem></Linker>
            <Linker to="/bedrift"   onClick={() => props.setOpen(false)}>
                <DropItem>BEDRIFT</DropItem></Linker>
            <Linker to="/internt"   onClick={() => props.setOpen(false)}>
                <DropItem>INTERNT</DropItem></Linker>
            <Linker to="/info"      onClick={() => props.setOpen(false)}>
                <DropItem>INFORMASJON</DropItem></Linker>
            <Linker to="/profil"      onClick={() => props.setOpen(false)}>
                <MobileDropItem id="profileSmall">PROFIL</MobileDropItem></Linker>
        </WrapperPages>
    </DropdownBox>
);

export {DropdownMenu};

const Linker = styled(Link)`
color: var(--gray-90);
  text-decoration: none;
  &:visited {
    color: var(--gray-90);
    text-decoration: none;
  }
`;

const DropdownBox = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    margin: 0; 
    background-color: var(--yellow-30);

    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    height: 100%;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-self: center;
    }
`;

const Close = styled.div `
    font-size: 40px;
    cursor: pointer;
`;

const Nav = styled.nav`
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px 5px 10px;
    margin-bottom: 0;
    padding: 0 40px 0 40px;
`;

const WrapperPages = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-top: 2%;
`;

const DropItem = styled(H2)`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 18px;
    &:hover {
        border-bottom: 1px solid var(--black);
        cursor: pointer;
        margin-top: 17px;
    }
    @media (min-width: 500px){
        font-weight: 1.5;
        font-size: 2rem;
    }
    
`;

const MobileDropItem = styled(DropItem) `
    
  @media (min-width: 1024px){
      display: none;
    }
`;

export{DropdownBox};