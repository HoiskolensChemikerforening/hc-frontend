import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";

  export const Profil = () => {

    return (
    <>
    <Title>
        Profil
    </Title>
   <RowContainer>
        <ProfilePictureContainer>
        <ChangeProfilePicture onClick={() => console.log('Endre profilbilde')}> Endre profilbilde </ChangeProfilePicture>
        </ProfilePictureContainer>
        <Column>
        <ProfileInfo>
            <Title2>Fornavn</Title2>
            <Title2>Etternavn</Title2>
        </ProfileInfo>
        <ProfileInfo>
            <Title2>Epost</Title2>
            <Title2>Adresse</Title2>
        </ProfileInfo>
        <ProfileInfo>
            <Title2>Mobilnummer</Title2>
            <Title2>EM-nummer</Title2>
        </ProfileInfo>
        <ProfileInfo>
            <Column>
            <Title2>Startår</Title2>
            <DropDown>
                <Option>År 1</Option>
                <Option>År 2</Option>
            </DropDown>
            </Column>
            <Column>
            <Title2>Estimert ferdig</Title2>
            <DropDown>
                <Option>År 1</Option>
                <Option>År 2</Option>
            </DropDown>
            </Column>
        </ProfileInfo>
        <ProfileInfo>
            <Title2>Matallergi</Title2>
            <Column>
            <Title2>Samlivssatus</Title2>
            <DropDown>
                <Option>Singel</Option>
                <Option>Opptatt</Option>
                <Option>;)</Option>
            </DropDown>
            </Column>
        </ProfileInfo>
        </Column>
   </RowContainer>
    </>      

    )
};

const Title = styled.div`
font-size: 1.875rem;
font-weight: 400;
margin-bottom: 16px;
display: flex;
justify-content: center;

color: #000;
background: var(--primary);
border: 3px var(--primary) solid;
`

const Title2 = styled.div`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 16px;
    display: flex;
`

const RowContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 250px;
    margin: 50px 10px 700px 40px;
`;

const ProfilePictureContainer = styled.div` 
    width: 40%;
    display: flex; 
    justify-content: start;
    margin: 50px 100px 100px 40px;
`;

const ProfileInfo = styled.div`
    width: 100%
    display: flex;
    justify-content: space-around;
    margin: 50px 100px 50px 4px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`
const DropDown = styled.select`
  border: solid 1px ;
  border-radius: 4px;
  background-color: white;
  padding: 10px;

  /* reset for custom styling */
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* custom dropdown arrow */
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 0px 1.5em;
  background-repeat: no-repeat;

  /* props */
  id: ${ props => props.id || null };
  width: ${ props => props.width || "200px" };
`;

const Option = styled.option`
  value: ${ props => props.value };
`;

const ChangeProfilePicture = styled.button`
    color: grey;
    border-radius 2px;
    cursor: pointer;
    padding: 0,25em 1em;
    position:relative; left:230px; top:22px;
`;
