import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Container, Row, Col} from "./FlexLayout";
import {H3, Link} from "./Text";
import {BiLogOut} from "react-icons/bi";


const UserBox = () => (
    <Row>
        <UserImage alt="HC-logo" src="logo.png"/>
        <Col>
            <UserText>Bendik Søta</UserText>
            <Row>
                <LogOut><BiLogOut/></LogOut>
                <UserText>Logg ut</UserText>
            </Row>
        </Col>
    </Row>
);

export {UserBox};

const UserImage = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    
`;

const LogOut = styled(Link)`
    font-size: 20px;
`;

const UserText = styled(H3)`
    font-size: 10px;
    width: 500px;
`;
