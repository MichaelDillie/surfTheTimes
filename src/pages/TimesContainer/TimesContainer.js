import React, { Component } from "react";
import { Col, Row, Container } from "../../components/GridSystem";
import Header from "../../components/Header";
import Search from "../../components/Search";

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
      </Container>
    );
  }
}

export default TimesContainer;