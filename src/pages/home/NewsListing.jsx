import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H3, P, Link } from "../../components/Text";
import { Wrapper } from "../../components/FlexLayout";

const NewsListing = ({src}) => (
    <Card href="#">
        <ImageContainer>
            <Image src={src} />
            <Overlay>
                <ReadMore>Les mer</ReadMore>
            </Overlay>
        </ImageContainer>
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

const ImageContainer = styled.div`
    overflow: auto;
    position: relative;
    height: ${props => props.children[0].height || "auto"};
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

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: var(--primary);
    &:hover {
        opacity: 0.5;
    }
`;

const ReadMore = styled(P)`
    margin: 0;
    font-weight: bold;
    opacity: 1 !important;
`;



export { NewsListing };