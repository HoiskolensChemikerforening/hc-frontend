import React, {useState} from "react";
import styled, {css} from "styled-components";
import {H2, H3} from "./Text";
import { BiX } from "react-icons/bi";


const DropdownMenu = (props) => (
    <DropdownBox open={props.isOpen}>
        <LogoArea>
            <LogoImg alt="HC-logo" src="logo.png"/>
            <NavText>
                <H>Høiskolens</H>
                <H>Chemikerforening</H>
            </NavText>
            <Close onClick={() => props.setOpen(false)}><BiX/></Close>
        </LogoArea>
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
    flex-wrap: wrap;
    align-content: space-around;
    height: 100px;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-self: center;
        //padding: 30px 30px 30px 30px;
        width: 100%;
        height: 100%;
        transition: 2s;
    }
`;

const Close = styled.div `
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    padding-right: 15px;
`;


const Nav = styled.nav`
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    margin-bottom: 0;
    border-bottom: 1px solid #B0BEC5;
    align-items: center;
`;

const LogoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px 0 50px;
    width: 100%;
`;


const NavText = styled.div`
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    /*color: #B0BEC5;*/
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

`

const DropItem = styled(H2)`
    font-weight: 0.9;
    font-size: .95rem;
    @media (min-width: 786px){
        font-weight: 1.;
        font-size: 1.25rem;
        transition: 2s;
    }
    
`;

export{DropdownBox};