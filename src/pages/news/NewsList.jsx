import React from "react";
import styled from "styled-components";
import { H3, P } from "../../components/Text";
import { Wrapper } from "../../components/FlexLayout";
import { Button } from "../../components/Button.js";
import image from "../../images/trondheim.jpg";


const data = [
    {id: 1, title: "Kjelleråpent på lørdag!", author: "Ola Nordmann", text: ""},
    {id: 2, title: "Buldring med sportskom", author: "Kari Nordmann", text: ""},
    {id: 3, title: "Hyttephaest", author: "Trygve Nordmann", text: ""},
    {id: 4, title: "Stormote", author: "Bjarne", text: ""},
    {id: 5, title: "Chemikalen", author: "Truls Nordmann", text: ""},
];


export const NewsList = () => (
    <NewsListContainer>
        <ButtonContainer>
            <Button primary>Opprett nyhet</Button>
        </ButtonContainer>
        {data.map((article) => (
            <NewsItem key={article.id}>
                <ImageContainer />
                <H3 bold>
                    {article.title}
                </H3>
                <P><span style={{fontWeight: "800"}}>{article.author}</span> / 2 timer siden</P>
            </NewsItem>
        ))}
    </NewsListContainer>
);

const NewsListContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
`;

const NewsItem = styled.div`
    margin: 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${image});
    background-size: cover;
`;
