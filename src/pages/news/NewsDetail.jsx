import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import styled from "styled-components";
import parse from "react-html-parser";
import { H1, P } from "../../components/Text";

import { fetchDetail } from "../../utils/requests";

export const NewsDetail = () => {
  const { params } = useRouteMatch("/nyheter/:id");
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchDetail("nyheter/api/", params.id, setArticle);
    console.log(article);
    console.log(params.id);
  }, [])

  return (
    <NewsContainer>
        <ImageContainer>
          <ArticleImage img={article.image} />
        </ImageContainer>

      <ArticleContainer>
        <H1 bigger bold>
          {article.title}
        </H1>

        <AuthorContainer>
          <AuthorImage img={article.image} />
          <P style={{ marginBottom: "0px" }}>
            av <span style={{color: "black", fontWeight: 600}}>{article.author?.full_name}</span>
            &nbsp;
            {new Date(article.published_date).toLocaleDateString()}
          </P>
        </AuthorContainer>

        <P style={{marginTop: "20px"}}>{parse(article.content)}</P>
      </ArticleContainer>
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
  width: 100%;
  height: 100%;
`;

const ArticleContainer = styled.div`
  max-width: 550px;
  @media (min-width: 500px){
    height:100%;
    width: 70%;
    }
  @media (min-width: 700px) {
    height:100%;
    width: 60%;
  }
  @media (min-width: 850px) {
    height:100%;
    width: 55%;
  }
  @media (min-width: 900px) {
    height:100%;
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  padding: 0 0px;
  margin-top: -5px;
  width: 100%;
  @media (min-width: 500px){
    height:100%;
    width: 70%;
    }
  @media (min-width: 700px) {
    height:100%;
    width: 60%;
  }
  @media (min-width: 850px) {
    height:100%;
    width: 55%;
    margin-bottom: -20px;
  }
  @media (min-width: 900px) {
    height:100%;
    width: 50%;
    margin-bottom: -20px;
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  padding-bottom: 67%;
  background: url(${props => props.img});
  background-size: cover;
`;

const AuthorImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url(${props => props.img});
  background-size: cover;
  margin-right: 6px;
  border: 3px var(--primary) solid;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
