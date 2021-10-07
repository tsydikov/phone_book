import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/actions";

const PhoneItem = ({ phone }) => {
  const dispatch = useDispatch();
  const deletePhoneBookItem = () => {
    dispatch(deleteItem(phone.id));
  };
  return (
    <Container>
      <Row>
        <Col>
          {phone.name} : {phone.phoneNamber}{" "}
          <Button variant="success">
            EDIT
          </Button>
          {" "}
          <Button variant="danger" onClick={deletePhoneBookItem}>
            DELETE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PhoneItem;
