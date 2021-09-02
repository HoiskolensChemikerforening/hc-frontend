import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";
import { Link } from "react-router-dom";
import {H3} from "./Text";
import {UserBox} from "./UserBox";
import {DropdownMenu} from "./DropdownMenu";
import {BiHomeAlt, BiBriefcaseAlt, BiCalendarEvent, BiGame, BiInfoCircle} from "react-icons/bi";


const NavBar = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);

    function updateMenuState(){
        if (menuOpen){
            setMenuOpen(false)
        } else {setMenuOpen(true)}
    }
    return (
        <>
            <NavContainer>

            <Nav>
                <LogoArea>
                    <LogoImg alt="HC-logo" src="logo.png"/> 
                    <NavText>
                        <H>Høiskolens</H>
                        <H>Chemikerforening</H>
                    </NavText>
                </LogoArea>
                <MenuItems>
                    <MenuItem to="/"><BiHomeAlt/></MenuItem>
                    <MenuItem to="/bedrift"><BiBriefcaseAlt/></MenuItem>
                    <MenuItem to="/arrangement"><BiCalendarEvent/></MenuItem>
                    <MenuItem to="/internt"><BiGame/></MenuItem>
                    <MenuItem to="/info"><BiInfoCircle/></MenuItem>
                </MenuItems>
               <UserBox toggleMenu={setMenuOpen}/>
            </Nav>
            </NavContainer>
            <DropdownMenu isOpen={menuOpen} setOpen={setMenuOpen}/>
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

const NavContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
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

const LogoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;


const NavText = styled.div`
    margin: 0px;
    margin-top: -7px;
`;

const H = styled(H3)`
    margin: 0px;
    font-weight: 500;
    font-size: 1rem;
    @media (min-width: 500px){
        font-weight: 500;
        font-size: 1.25rem;
    }
    
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