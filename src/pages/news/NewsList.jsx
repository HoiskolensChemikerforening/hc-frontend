import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { H3, P } from "../../components/Text";
import { Button } from "../../components/Button.js";
import moment from 'moment';
import { BiMessageRoundedMinus } from "react-icons/bi";

export const NewsList = () => {
  useEffect(() => {
    fetchArticles();
  }, []);

  const [articles, setArticles] = useState([]);
  const history = useHistory();

  const fetchArticles = async () => {
    const data = await fetch("http://localhost:8000/nyheter/api/");
    const items = await data.json();
    setArticles(items);
  };

  return (
      <NewsListContainer>
        <ButtonContainer>
          {//This should be edited to in a absolute position on homepage
          // or only visible when hovered
          }
          <Link to="/nyheter/ny">
            <Button primary>Opprett nyhet</Button>
          </Link>
        </ButtonContainer>
        {articles.map((article) => (
            <NewsItem key={article.id}>
              <div>
                <ImageContainer img={article.image} onClick={() => {history.push(`/nyheter/${article.id}`)}}/>
              </div>

              <div>
                <H3 biggest bold style={{margin: "10px"}}>
                  {article.title}
                </H3>
                <P small style={{margin: "10px"}}>
                  <span style={{fontWeight: 600}}>{article.author.full_name}</span>
                  &nbsp;
                  <span style={{color: "#616161"}}>{new Date(article.published_date).toLocaleDateString()}</span>
                </P>
                <P style={{margin: "10px"}}>
                  Dette er en ingress
                </P>
              </div>
                <HRule></HRule>
            </NewsItem>
        ))}
      </NewsListContainer>
  )
};

const NewsListContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
`;

const NewsItem = styled.div`
    margin: 0 0 20px 0;
    &:hover {
        background-color: #EEE;
        cursor: pointer;
    }
`;

const Shade = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${props => props.img});
    background-size: cover;
`;


const HRule = styled.hr`
    margin: 0;
    padding: 0;
    border: var(--gray-30) 0.1px solid;

`