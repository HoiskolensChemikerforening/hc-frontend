import React, {useState} from "react";
import styled, {css} from "styled-components";
import {H2, H3} from "./Text";
import { BiX } from "react-icons/bi";


const DropdownMenu = (props) => (
    <DropdownBox open={props.isOpen}>
        <Nav>
            <LogoArea>
            <LogoImg alt="HC-logo" src="logo.png"/>
            <NavText>
                <H>Høiskolens</H>
                <H>Chemikerforening</H>
            </NavText>
            </LogoArea>
            <Close onClick={() => props.setOpen(false)}><BiX/></Close>
        </Nav>
        <WrapperPages>
            <DropItem>ARRANGEMENT</DropItem>
            <DropItem>NYHETER</DropItem>
            <DropItem>BOKSKAP</DropItem>
            <DropItem>KONTORET</DropItem>
            <DropItem>KONTAKT</DropItem>
            <DropItem>INTERNT</DropItem>
        </WrapperPages>
    </DropdownBox>
);

export {DropdownMenu};

const DropdownBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0; 
    background-color: var(--yellow-30);

    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-self: center;
        //padding: 30px 30px 30px 30px;
        
    }
`;

const LogoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
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
    margin: 10px;
    margin-bottom: 0;
`;

const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    padding-right: 15px;
`;


const NavText = styled.div`
    display: none;
    flex-direction: column;
    margin: 0px;
    @media (min-width: 1024px){
        display: flex;
    }
`;

const H = styled(H3)`
    margin: 0px;
    font-weight: 500;
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
    @media (min-width: 786px){
        font-weight: 1.5;
        font-size: 2rem;
    }
    
`;

export{DropdownBox};