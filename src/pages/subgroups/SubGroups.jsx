import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Subgroup } from "../../components/Subgroups/CardSubGroups"

const CommitteePage = () => {
  useEffect(() => {
    fetchCommittees();
  }, []);

  const [committees, setCommittees] = useState([]);
  const history = useHistory();

  const fetchCommittees = async () => {
    const data = await fetch("http://localhost:8000/verv/api/");
    const items = await data.json();
    console.log(items);
    setCommittees(items);
  };

  return (
    <Container>
      <Row>
        <TitleContainer>
            <Title>Komiteer og Undergrupper</Title>
          </TitleContainer>
      </Row>
      <Row>
        {committees.map((committee) => (
          <Subgroup key={committee.id} committee={committee} history={history}></Subgroup>
        ))}
      </Row>
    </Container>
  )
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  background-color: #f8e469ff;
  text-align: center;
  padding: 5px 15px 5px 15px;
`

export { CommitteePage, TitleContainer, Title}
