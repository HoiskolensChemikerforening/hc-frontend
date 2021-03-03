import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Container} from "./FlexLayout";
import {H3, P, Link} from "./Text";
import {BiLogOut, BiMenu} from "react-icons/bi";
import {DropdownBox} from "./DropdownMenu";

const UserBox = (props) => (
    <UserArea>
        <UserImage alt="HC-logo" src="logo.png"/>
        <Log>
            <UserText>Bendik Søta</UserText>
            <LogInOut>
                <LogOut><BiLogOut/></LogOut>
                <LogText>Logg ut</LogText>
            </LogInOut>
        </Log>
        <MenuBox onClick={() => props.toggleMenu(true)} ><BiMenu/></MenuBox>
    </UserArea>
);

export {UserBox};

const UserArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const UserImage = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px;
    display: none;
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 1024px){
        display: flex;
    }
`;

const Log = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 150px;
    @media (min-width: 1024px){
        display: flex;
    }
    
`;
const LogInOut = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    &:hover{
        cursor: pointer;
    }
`;

const LogOut = styled(Link)`
    font-size: 25px;
    margin: 0;
`;

const UserText = styled(P)`
    width: 100%;
    margin: 0;
`;

const LogText = styled(P)`
    font-size: 12px;
    font-weight: 0;
    width: 100%;
    margin: 0;
`;

const MenuBox = styled.div`
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`;
