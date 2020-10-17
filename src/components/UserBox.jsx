import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Container} from "./FlexLayout";
import {H3, P, Link} from "./Text";
import {BiLogOut, BiMenu} from "react-icons/bi";
import {DropdownBox} from "./DropdownMenu";

const UserBox = () => (
    <UserArea>
        <UserImage alt="HC-logo" src="logo.png"/>
        <Log>
            <UserText>Bendik Søta</UserText>
            <LogInOut>
                <LogOut><BiLogOut/></LogOut>
                <LogText>Logg ut</LogText>
            </LogInOut>
        </Log>
        <MenuBox><BiMenu/></MenuBox>
    </UserArea>
);

export {UserBox};

const UserArea = styled.div`
    display: flex;
    flex-direction: row;
    width = 400px;
    margin-right:20px;
    align-items: center;
`;

const UserImage = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px;
`;

const Log = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 150px;
    
`;
const LogInOut = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
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
    &:onClick {
      visibility : hidden;
    }
`;
