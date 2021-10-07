import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PhoneItem = ({phone}) => {
  return (
    <Container>
      <Row>
        <Col sm>{phone.name}</Col>
        <Col sn >{phone.phone}</Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
