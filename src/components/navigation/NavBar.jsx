import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {UserBox} from "./UserBox";
import {DropdownMenu} from "./DropdownMenu";
import {BiHomeAlt, BiBriefcaseAlt, BiCalendarEvent, BiGame, BiInfoCircle} from "react-icons/bi";
import { NavLogo } from "./NavLogo";


const NavBar = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);  
    return (
        <>
            <NavContainer>
            <Nav>
                <NavLogo/>
                <MenuItems>
                    <MenuItem to="/"><BiHomeAlt/></MenuItem>
                    <MenuItem to="/bedrift"><BiBriefcaseAlt/></MenuItem>
                    <MenuItem to="/arrangement"><BiCalendarEvent/></MenuItem>
                    <MenuItem to="/internt"><BiGame/></MenuItem>
                    <MenuItem to="/info"><BiInfoCircle/></MenuItem>
                </MenuItems>
               <UserBox toggleMenu={setMenuOpen} />
            </Nav>
            </NavContainer>
            <DropdownMenu isOpen={menuOpen} setOpen={setMenuOpen}/>
        </>
    )
};

export {NavBar};


const NavContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    z-index: 1;
    top: 0px;
    background-color: var(--white);
`;

const Nav = styled.nav`
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 10px 5px 10px;
    padding: 0 40px 0 40px;
    border-bottom: 1px solid #B0BEC5;
    align-items: center;
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
    font-size: 35px;
    margin: 0 25px;
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
`;