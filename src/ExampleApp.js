import React from 'react';

import { DarkPage, HRule, Container, Row, Column } from './components/Layout';
import { Card } from './components/Card';
import { SectionHeader, Header, Lead } from './components/Text';


class ExampleApp extends React.Component {
  state = { checked: false };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <DarkPage>
        <Container>
          <Row>
            <Column xs="12" sm="12" md="6" lg="6">
              <SectionHeader yellow>Design</SectionHeader>
              <Lead>Webkomiteen har utarbeidet en ny grafisk profil for Høiskolens Chemikerforening sine nettsider</Lead>
            </Column>
          </Row>

          <HRule dramatic white></HRule>

          <Row>
            <Column xs="12" sm="12" md="3" lg="3">
              <Header>Personlighet</Header>
            </Column>
          </Row>

          <HRule dramatic white></HRule>

          <Row>
            <Column xs="12" sm="12" md="3" lg="3">
              <Header>Farger</Header>
            </Column>
          </Row>

          <HRule dramatic white></HRule>

          <Row>
            <Column xs="12" sm="12" md="3" lg="3">
              <Header>Typografi</Header>
            </Column>
          </Row>
        </Container>
      </DarkPage>
    )
  }
}

export default ExampleApp;