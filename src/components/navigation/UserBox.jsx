import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { P } from "../Text";
import { Link } from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { getRequest } from "../../utils/requests";

const UserBox = (props) => {
    const [profile, setProfile] = useState(false);

    useEffect(() => {
        getRequest("bruker/api/", setProfile);
      }, []);
    
    return (
    <>
    {profile ?
    <UserArea>
        <Link to="/profil" style={linkStyle}><UserImage alt="user-image" 
                src={profile.image_primary}/>
        </Link>
        <Log>
            <Link to="/profil" style={linkStyle}><UserText>{profile.user.full_name}</UserText></Link>
            <LogInOut>
                <Link to="/" style={styleLogOut}><BiLogOut/></Link>
                <LogText>Logg ut</LogText>
            </LogInOut>
        </Log>
        <MenuBox onClick={() => props.toggleMenu(true)} ><BiMenu/></MenuBox>
    </UserArea>
    :
    <UserArea>
    <Link to="/profil" style={linkStyle}><UserImage alt="HC-logo" src="logo.png"/></Link>
    <Log>
        <Link to="/profil" style={linkStyle}><UserText>IKKE LOGGET INN</UserText></Link>
        <LogInOut>
            <Link to="/login" style={styleLogOut}><BiLogOut/></Link>
            <LogText>Logg inn</LogText>
        </LogInOut>
    </Log>
    <MenuBox onClick={() => props.toggleMenu(true)} ><BiMenu/></MenuBox>
    </UserArea>
    }
    </>
);
}

export {UserBox};

const linkStyle= {
    color: "var(--gray-90)",
    textDecoration: "none"
};

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
    max-width: 250px;
    min-width: 150px;
    margin-right: 30px;

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
    margin: 5px 0 -12px -6px;

    &:hover{
        cursor: pointer;
    }
`;

const styleLogOut = {
    fontSize: "25px",
    margin: "0",
    textDecoration: "none",
    color: "black"
};

const UserText = styled(P)`
    width: 100%;
    margin: -7px 0 0 0;
`;

const LogText = styled(P)`
    font-size: 12px;
    font-weight: 0;
    width: 100%;
    margin: 0 0 5px 0;
    &:hover{
        cursor: pointer;
    }
`;

const MenuBox = styled.div`
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`;
