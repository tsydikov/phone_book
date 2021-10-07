import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import PhoneList from "./components/PhoneList";

function App() {
  const disatch = useDispatch();
  const phoneBook = useSelector((state) => state.phoneBook);
  console.log(phoneBook);
  return (
    <Container>
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
      <Row>
        <Col>
          <PhoneList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
