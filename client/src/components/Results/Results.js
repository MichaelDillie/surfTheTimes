import React from "react";
import { Col, Row, Container } from "../GridSystem";

class Results extends React.Component {

  render() {
    return(
      <div>
        <Row>
          <Col size="6">
            <Row>
              <h5>Hello</h5>
            </Row>
            <Row>
              <p>OTHER SHIT</p>
            </Row>
          </Col>
          <Col size="4">
            <button type="button" className="btn btn-primary">Primary</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Results;