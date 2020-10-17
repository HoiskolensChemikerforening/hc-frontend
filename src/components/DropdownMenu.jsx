import React, {useState} from "react";
import styled, {css} from "styled-components";
import {H2, P, Link} from "./Text";


const DropdownMenu = () => (
    <DropdownBox>
      <DropItem>ARRANGEMENT</DropItem>
      <DropItem>NYHETER</DropItem>
      <DropItem>BOKSKAP</DropItem>
      <DropItem>KONTORET</DropItem>
      <DropItem>KONTAKT</DropItem>
      <DropItem>INTERNT</DropItem>
    </DropdownBox>
);

export {DropdownMenu};


const DropdownBox = styled.div`
    position: absolute;
    right: 0;
    margin: 0; 
    background-color: var(--yellow-30);
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    padding: 30px 0 30px 60px
    visibility: hidden;
    
`;

const DropItem = styled(H2)`
    font-weight: bold;
    font-size: 1.25rem;
`;

export{DropdownBox};