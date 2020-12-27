import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import parse from "react-html-parser";
import { H1, P, Link } from "../../components/Text";


export const NewsDetail = () => {
  useEffect(() => {
    fetchArticle();
  }, []);

  const {id} = useParams();

  const [article, setArticle] = useState([]);
  const [author, setAuthor] = useState([]);

  const fetchArticle = async () => {
    const data = await fetch("http://localhost:8000/nyheter/api/" + id.toString() + "/");
    const item = await data.json();
    setArticle(item);
    setAuthor(item.author);
  };

  return (
      <Flex>
        <ImageContainer>
          <h1>{article.title}</h1>
          <ArticleImage img={article.image}/>
        </ImageContainer>

        <ArticleContainer>
          <H1 bigger bold>
            {article.title}
          </H1>

          <AuthorContainer>
            <AuthorImage img={article.image}/>
            <P style={{marginBottom: "0px"}}>
              av <Link bold>{author.full_name}</Link>,
              {new Date(article.published_date).toLocaleDateString()}
            </P>
          </AuthorContainer>

          <P>{parse(article.content)}</P>

        </ArticleContainer>
      </Flex>
  )
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const ArticleContainer = styled.div`
    max-width: 550px;
`;

const ImageContainer = styled.div`
  padding: 0 200px;
  height: 100%;
  width: 100%;
  max-width: 60%;
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