import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Form from "./components/Form";
import PhoneList from "./components/PhoneList";
import MyNavbar from "./UI/MyNavbar";

function App() {
  return (
    <Container>
     <MyNavbar />
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
