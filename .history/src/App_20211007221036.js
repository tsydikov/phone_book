import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Form from "./components/Form";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <Container>
      <Row>
        <Col className="p-2">
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
