import React, { Component } from "react";
import { Col, Row, Container } from "../../components/GridSystem";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Results from "../../components/Results";

class TimesContainer extends Component {

  render() {
    return(
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Search />
        </Row>
        <Row>
          <Results />
        </Row>
      </Container>
    );
  }
}

export default TimesContainer;