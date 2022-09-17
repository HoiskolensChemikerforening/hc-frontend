import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { useHistory } from "react-router-dom";
import { H2 } from "../components/Text";



export const CommitteeMemberList = (props) => ( 
    /* The static elements in the <Col> element (<H2> and <div> elements) are to be removed and replaced
    by a mapping of positions to a position card, which again should contain a mapping of members*/
    <Col>
        <H2>
            Position
        </H2>
        <div>
            Name
        </div>
        <H2>
            Position
        </H2>
        <div>
            Name
        </div>
        <div>
            Name
        </div>
        <div>
            Name
        </div>
    </Col>
)




