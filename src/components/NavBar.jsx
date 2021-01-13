import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";

import {H3, Link} from "./Text";
import {UserBox} from "./UserBox";
import {DropdownMenu} from "./DropdownMenu";
import {IconContext} from "react-icons";
import {BiHomeAlt, BiBriefcaseAlt, BiCalendarEvent, BiCoffee} from "react-icons/bi";


const NavBar = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);

    function updateMenuState(){
        if (menuOpen){
            setMenuOpen(false)
        } else {setMenuOpen(true)}
    }
    return (
        <>
            <Nav>
                <LogoArea>
                    <LogoImg alt="HC-logo" src="logo.png"/>
                    <NavText>
                        <H>Høiskolens</H>
                        <H>Chemikerforening</H>
                    </NavText>
                </LogoArea>
                <MenuItems>
                    <MenuItem><BiHomeAlt/></MenuItem>
                    <MenuItem><BiBriefcaseAlt/></MenuItem>
                    <MenuItem><BiCalendarEvent/></MenuItem>
                    <MenuItem><BiCoffee/></MenuItem>
                </MenuItems>
                <UserBox toggleMenu={updateMenuState}/>
            </Nav>
            <DropdownMenu isOpen={menuOpen}/>
        </>
    )
};

export {NavBar};


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
    margin: 0;
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
const MenuItems = styled.div`
    padding-top: 18px;
    margin-left: -20px;
    display: none;
    @media (min-width: 768px){
        display: flex;
    }
`;


const MenuItem = styled(Link)`
    font-size: 40px;
    margin: 0 25px;
    border-bottom:  3px solid rgba(0,0,0,0);
    transition: 0.4s;
    &:hover {
        border-bottom: 3px solid var(--yellow-30);
        cursor: pointer;
    }
    
`;