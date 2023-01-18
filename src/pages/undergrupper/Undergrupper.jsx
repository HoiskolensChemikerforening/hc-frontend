import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Subgroup } from "../../components/CardUndergruppe"

export const CommitteePage = () => {
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
        <H1>Komiteer og Undergrupper</H1>
      </Row>
      <Row>
        {committees.map((committee) => (
          <Subgroup key={committee.id} committee={committee} history={history}></Subgroup>
        ))}
      </Row>
    </Container>
  )
};