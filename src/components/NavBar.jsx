import React, {useState} from "react";
import styled, {css} from "styled-components";
import "../index.css";
import {Container, Row, Col} from "./FlexLayout";

import {H1, Link} from "./Text";
import {UserBox} from "./UserBox";

import {IconContext} from "react-icons";
import {BiHomeAlt, BiBriefcaseAlt, BiCalendarEvent, BiCoffee} from "react-icons/bi";



const NavBar = () => (
    <Nav>
        <Img alt="HC-logo" src="logo.png"/>
        <Row style={{margin: 10,}}>
            <MenuItem><BiHomeAlt/></MenuItem>
            <MenuItem><BiBriefcaseAlt/></MenuItem>
            <MenuItem><BiCalendarEvent/></MenuItem>
            <MenuItem><BiCoffee/></MenuItem>
        </Row>
        <UserBox/>
    </Nav>
);

export {NavBar};

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

const Nav = styled.nav `
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    border-bottom: 1px solid #B0BEC5;
`;

const MenuItem = styled(Link)`
    font-size: 40px;
    margin: 0 40px;
`;