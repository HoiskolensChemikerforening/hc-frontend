
import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";
import { Link } from "react-router-dom";
import {H3} from "./Text";
import {UserBox} from "./UserBox";
import {DropdownMenu} from "./DropdownMenu";
import {BiHomeAlt, BiBriefcaseAlt, BiCalendarEvent, BiGame, BiInfoCircle} from "react-icons/bi";


const NavBarPhone = () => {
    return (
        <>
            <Nav>
                <MenuItems>
                    <MenuItem to="/"><BiHomeAlt/></MenuItem>
                    <MenuItem to="/bedrift"><BiBriefcaseAlt/></MenuItem>
                    <MenuItem to="/arrangement"><BiCalendarEvent/></MenuItem>
                    <MenuItem to="/internt"><BiGame/></MenuItem>
                    <MenuItem to="/info"><BiInfoCircle/></MenuItem>
                </MenuItems>
            </Nav>
        </>
    )
};

export {NavBarPhone};



const Nav = styled.nav`
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    margin-bottom: 0;
    padding: 0 40px 0 40px;
    border-top: 1px solid #B0BEC5;
    position: absolute;
    align-items: center;
    bottom: 0;
    width: 100%;
`;

const MenuItems = styled.div`
    padding-top: 18px;
    margin-left: -10px;
    width: 100%;
`;


const MenuItem = styled(Link)`
    font-size: 31px;
    margin: 0 13px;
    border-bottom:  3px solid rgba(0,0,0,0);
    transition: 0.4s;
    color: black;
    text-decoration: none;
    &:hover {
        border-bottom: 3px solid var(--yellow-30);
        cursor: pointer;
    }
    &:visited {
        color: var(--gray-90);
        text-decoration: none;
    } 
    @media (min-width: 768px){
        display: none;
    }
`;