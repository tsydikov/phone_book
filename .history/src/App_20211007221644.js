import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Form from "./components/Form";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <Container>
      <Row className="py-2">
        <h1>CRUD приложение - телефонный справочник</h1>
      </Row>
      <Row>
        <Col className="p-4">
          <Form />
        </Col>
      </Row>
      <Row>
        <Col className="p-4">
          <PhoneList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
