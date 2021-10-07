import React from "react";
import { Col, Row } from "react-bootstrap";

const PhoneItem = ({phone}) => {
  return (
    <Container fluid="md">
      <Row>
        <Col>{phone.name}</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
