import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const PhoneItem = ({phone}) => {
  return (
    <Container>
      <Row>
        <Col>{phone.name} : {phone.phoneNamber} <Button variant="danger">X</Button></Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
