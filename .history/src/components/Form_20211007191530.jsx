import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Form = () => {
    const dispatch =useDispatch()
  return (
    <Container>
      <input />
      <input />
      <Button onClick={addNewPhoneBookItem}>ADD</Button>
    </Container>
  );
};

export default Form;
