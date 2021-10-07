import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PhoneItem = ({phone}) => {
  return (
    <Container>
      <Row>
        <Col>{phone.name} : {phone.phoneNamber}</Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
