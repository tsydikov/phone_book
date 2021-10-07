import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const PhoneItem = ({phone}) => {
    const dispatch = useDispatch();
    const deletePhoneBookItem = () => {
        
    }
  return (
    <Container>
      <Row>
        <Col>{phone.name} : {phone.phoneNamber} <Button variant="danger" onClick={deletePhoneBookItem}>X</Button></Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
