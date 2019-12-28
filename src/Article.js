import React from 'react';

import { Navbar, HRule, Container, Row, Column, Center } from './components/Layout';
import { Card } from './components/Card';
import { LogoText, Header, Lead, Long, Detail } from './components/Text';


class ExampleApp extends React.Component {
  state = { checked: false };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <div>
        <Navbar>
          <Container>
            <Row>
              <a>
                <LogoText>
                  Høiskolens<br></br>
                  Chemikerforening
              </LogoText>
              </a>
            </Row>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Center>
              <Column xs="12" sm="12" md="6" lg="6">
                <Header dramatic>Ny grafisk profil</Header>
                <Lead bold>Webkomiteen har utarbeidet en ny grafisk profil for Høiskolens Chemikerforening sine nettsider.</Lead>
                <Detail dramatic>Av Håkon Pelsholen Busterud | 1. desember 2019</Detail>

              </Column>
            </Center>
            <img style={{ width: "100%", marginBottom: 30 }} src="trondheim.jpg"></img>
            <Center>
              <Column xs="12" sm="12" md="6" lg="6">
                <Long>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere a magna eu cursus. Morbi eu
                  dolor non magna tristique consectetur. Morbi congue felis id ante ultricies, ut sagittis purus posuere.
                  Vivamus ac elit odio.
                </Long>
                <code>
                  <span style={{ color: "cyan" }}>class</span> <span style={{ color: "lime" }}>ExampleApp</span> <span style={{ color: "cyan" }}>extends</span> <span style={{ color: "lime" }}>React</span>.<span style={{ color: "lime" }}>Component</span>
                </code>
                <Long>
                  Sed sed augue vitae massa viverra fermentum vitae non diam. Sed at ipsum fermentum, vulputate sapien ac, tincidunt
                  quam. Sed nisl leo, gravida sed sem sed, rutrum elementum nibh. Pellentesque eget eros maximus, rhoncus arcu
                  viverra, fringilla mauris.
                </Long>
                <Long>
                  Nulla feugiat arcu quam. Cras placerat nibh vitae diam vulputate, eget ultrices libero faucibus. Maecenas id neque
                  nisi. Duis egestas turpis at tellus efficitur, sit amet euismod diam maximus. Nullam bibendum, dolor in interdum
                  volutpat, lacus massa fringilla tortor, in dapibus sapien metus id velit.
                </Long>
                <Long>
                  Praesent ac ipsum euismod, accumsan augue
                  sit amet, rutrum nulla. Cras nec tellus ut felis feugiat cursus. Nullam at elementum magna. Donec laoreet nunc eget
                  tortor interdum pellentesque. Nulla eu diam non risus ultricies sagittis. Integer finibus suscipit ante.
                </Long>
                <Long>
                  Duis est dui, porttitor ut ornare in, vestibulum quis ante. Nulla vulputate quam turpis, et pellentesque leo
                  vehicula nec. Fusce sed risus ut dui placerat tristique. Aliquam laoreet pellentesque est vitae viverra.
                  Maecenas volutpat dui magna, ut tempus leo dictum vehicula.
                </Long>
                <Long>
                  Sed sed augue vitae massa viverra fermentum vitae non diam. Sed at ipsum fermentum, vulputate sapien ac, tincidunt
                  quam. Sed nisl leo, gravida sed sem sed, rutrum elementum nibh. Pellentesque eget eros maximus, rhoncus arcu
                  viverra, fringilla mauris.
                </Long>
                <Long>
                  Nulla feugiat arcu quam. Cras placerat nibh vitae diam vulputate, eget ultrices libero faucibus. Maecenas id neque
                  nisi. Duis egestas turpis at tellus efficitur, sit amet euismod diam maximus. Nullam bibendum, dolor in interdum
                  volutpat, lacus massa fringilla tortor, in dapibus sapien metus id velit.
                </Long>
                <Long>
                  Praesent ac ipsum euismod, accumsan augue
                  sit amet, rutrum nulla. Cras nec tellus ut felis feugiat cursus. Nullam at elementum magna. Donec laoreet nunc eget
                  tortor interdum pellentesque. Nulla eu diam non risus ultricies sagittis. Integer finibus suscipit ante.
                </Long>
              </Column>
            </Center >
          </Row >


          <Row>
            <Column xs="12" sm="12" md="3" lg="3">
            </Column>
          </Row>

        </Container >
      </div>
    )
  }
}

export default ExampleApp;