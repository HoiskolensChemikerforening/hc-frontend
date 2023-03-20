import React from "react";
import styled from "styled-components";
import { H3 } from "../Text"; 

export const NavLogo = () => (
    <LogoArea>
        <LogoImg alt="HC-logo" src="logo.png"/>
        <NavText>
            <H>Høiskolens</H>
            <H>Chemikerforening</H>
        </NavText>
    </LogoArea>
)


const LogoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    padding-right: 15px;
`;


const NavText = styled.div`
    display: none;
    margin: 0px;
    margin-top: -7px;
    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
    }
`;

const H = styled(H3)`
    margin: 0px;
    font-weight: 500;
`;