import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const disatch = useDispatch();
  const phoneBook = useSelector((state) => state.phoneBook);
  console.log(phoneBook);
  return (
    <Container>
      <Row>
        <Col>
          <input />
          <input />
          <Button>ADD</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
