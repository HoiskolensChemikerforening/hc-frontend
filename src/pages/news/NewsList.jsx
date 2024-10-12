import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { H3, P } from "../../components/Text";
import { Button, ButtonContainer } from "../../components/Button.js";
import parse from "react-html-parser";
import { fetchList, checkPermission } from "../../utils/requests";

import AuthContext from "../../context/AuthContext";

export const NewsList = () => {
  let {user} = useContext(AuthContext);
  const [articles, setArticles] = useState([]);
  const [canAddArticle, setCanAddArticle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchList("nyheter/api/", setArticles);
    checkPermission("news.add_article", user, setCanAddArticle);
  }, [user]);

  return (
      <NewsListContainer>
        <ButtonContainer center>
          {//This should be edited to in a absolute position on homepage
          // or only visible when hovered
          //Previously link component wrapped around button
          }
          {canAddArticle ?
          <Button primary onClick={() => {history.push(`/nyheter/ny`)}}>Opprett nyhet</Button>
          :<></>
          }
        </ButtonContainer>
        {articles.map((article) => (
            <NewsItem key={article.id} onClick={() => {history.push(`/nyheter/${article.id}`)}}>
              <div>
                <ImageContainer img={article.image} />
              </div>

              <div style={{borderRadius: "5px"}}>
                <H3 biggest bold style={{margin: "10px"}}>
                  {article.title}
                </H3>
                <P small style={{margin: "10px"}}>
                  <span style={{fontWeight: 600}}>{article.author.full_name}</span>
                  &nbsp;
                  <span style={{color: "#616161"}}>{new Date(article.published_date).toLocaleDateString()}</span>
                </P>
                <Ingress>
                {parse(article.content)}
                </Ingress>
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

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${props => props.img});
    background-size: cover;
    border-radius: 5px;
`;


const HRule = styled.hr`
    margin: 0;
    padding: 0;
    border: var(--gray-30) 0.1px solid;

`;

const Ingress = styled.div`
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 2.5em;
`;