import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/actions";

const PhoneItem = ({phone}) => {
    const dispatch = useDispatch();
    const deletePhoneBookItem = () => {
        console.log(phone.id);
        dispatch(deleteItem(phone.id)) 
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
