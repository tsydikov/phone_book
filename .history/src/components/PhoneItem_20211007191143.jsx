import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PhoneItem = ({phone}) => {
  return (
    <Container>
      <Row>
        <Col sm>{phone.name}</Col>
        <Col sm>{phone.phoneNamber}</Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
