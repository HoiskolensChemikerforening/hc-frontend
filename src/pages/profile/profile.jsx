import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { PageContainer } from "../../components/Layout";
import { Button } from "../../components/Button";
import { YearPicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { ImageUpload } from "../../components/Form";


  export const Profil = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = (event) => {
        setIsLoading(true);
        
        event.preventDefault();
        // Get profile info
        const fornavn = event.target.fornavn.value; // Get correct values
        const etternavn = event.target.etternavn.value; // Get correct values
        const epost = event.target.epost.value; // Get correct values
        const adresse = event.target.adresse.value; // Get correct values
        const mobilnr = event.target.mobilnr.value; // Get correct values
        const emnr = event.target.emnr.value; // Get correct values
        const startyear = event.target.startyear.value; // Get correct values
        const endyear = event.target.endyear.value; // Get correct values
        const allergi = event.target.allergi.value; // Get correct values
        const samlivsstatus = event.target.samlivsstatus.value; // Get correct values


        const loginPayload = {
            "fornavn": fornavn,
            "etternavn": etternavn,
            "epost": epost,
            "adresse": adresse,
            "mobilnr": mobilnr,
            "emnr": emnr,
            "startyear": startyear,
            "endyear": endyear,
            "allergi": allergi,
            "samlivsstatus": samlivsstatus
        }}


    return (
    <PageContainer>
        <Auth>
        <H1>Profil</H1>
        <ImageUpload/>
        <Button primary> {isLogin ? "Endre profilbilde" : "Send" }</Button>
        <form onSubmit={handleSubmit}>
                    <Control>
                    <Label htmlFor="fornavn">Fornavn</Label>
                    <Input type="fornavn" id="fornavn" required placeholder="Skriv inn fornavn..." />
                    </Control>
                    <Control>
                    <Label htmlFor="etternavn">Etternavn</Label>
                     <Input type="etternavn" id="etternavn" required placeholder="Skriv inn etternavn..."/>
                    </Control> 
                    <Control>
                    <Label htmlFor="epost">E-post</Label>
                     <Input type="epost" id="epost" required placeholder="Skriv inn din e-post..."/>
                    </Control>
                    <Control>
                    <Label htmlFor="adresse">Adresse</Label>
                     <Input type="adresse" id="adresse" required placeholder="Skriv inn adresse..."/>
                    </Control>
                    <Control>
                    <Label htmlFor="mobilnr">Mobilnummer</Label>
                     <Input type="mobilnr" id="mobilnr" required placeholder="Skriv inn mobilnummeret ditt.."/>
                    </Control>
                    <Control>
                    <Label htmlFor="emnr">EM-nummer</Label>
                     <Input type="emnr" id="emnr" required placeholder="Skriv inn EM-nummer..."/>
                    </Control>
                    <Control>
                    <Label htmlFor="startyear">Startår</Label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <YearPicker/>
                    </LocalizationProvider>
                    </Control>
                    <Control>
                    <Label htmlFor="endyear">Estimert ferdig</Label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <YearPicker/>
                    </LocalizationProvider>
                    </Control>
                    <Control>
                    <Label htmlFor="emnr">Alergener/Diett</Label>
                     <Input type="allergi" id="allergi" required placeholder="Skriv inn ..."/>
                    </Control>
                    <Control>
                    <Label htmlFor="samlivsstatus">Samlivsstatus</Label>
                    <DropDown></DropDown>
                    </Control>
                </form>
   </Auth>
   </PageContainer>     
    )
};

const Auth = styled.section`
    margin: 3rem auto;
    width: 95%;
    max-width: 25rem;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
`;

const Control = styled.div`
    margin-bottom: 0.5rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    font-style: inherit;
    background-color: var(--yellow-00);
    border-radius: 4px;
    border: 1px solid white;
    width: 70%;
    text-align: left;
    padding: 0.25rem;
  `;

  const Action = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    left:230px; 
    top:22px;
    display: flex; 
    justify-content: center;
`;
