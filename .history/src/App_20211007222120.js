import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Form from "./components/Form";
import PhoneList from "./components/PhoneList";
import Navbar from "./UI/Navbar";

function App() {
  return (
    <Container>
     <Navbar />
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
