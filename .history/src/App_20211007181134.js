import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className="p-2">
        <input /><input /><Button>ADD</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
