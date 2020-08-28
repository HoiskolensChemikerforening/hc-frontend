import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H3, P, Link } from "../../components/Text";
import { Wrapper } from "../../components/FlexLayout";

const NewsListing = ({src}) => (
    <Card href="#">
        <Image src={src} />
        <Title>
            17. mai med HC!
        </Title>
        <TitleLine />
        <P small>Mandag 27. april er det klart for å velge nye komitémedlemmer!</P>
    </Card>
);

const Card = styled(Link)`
    width: 100%;
    @media only screen and (min-width: 992px) {
        width: 48%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 5px 0;
`;

const TitleLine = styled.div`
    height: 5px;
    background-color: var(--primary);
    width: 30px;
    margin-bottom: 5px;
`;

export { NewsListing };