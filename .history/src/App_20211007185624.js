import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const disatch = useDispatch()
  const useSelector(state => state.phoneBook)
  return (
    <Container>
      <Row>
        <Col>
        <input /><input /><Button>ADD</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
