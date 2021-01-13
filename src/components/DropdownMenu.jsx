import React, {useState} from "react";
import styled, {css} from "styled-components";
import {H2} from "./Text";


const DropdownMenu = (props) => (
    <DropdownBox open={props.isOpen}>
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
    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    height: 100px;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-content: flex-start;
        padding: 30px 0 30px 60px;
        width: 300px;
        transition: 2s;
        height: auto;
    }
`;


const DropItem = styled(H2)`
    font-weight: 0.9;
    font-size: .95rem;
    @media (min-width: 786px){
        font-weight: 1.;
        font-size: 1.25rem;
        transition: 2s;
    }
    
`;

export{DropdownBox};