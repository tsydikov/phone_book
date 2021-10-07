import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Form = () => {
    const [name,setName] = useState()
    const [phone, setPhone] = useState()
  const dispatch = useDispatch();
  const addNewPhoneBookItem = () => {

  };
  return (
    <Container>
      <input  />
      <input />
      <Button onClick={addNewPhoneBookItem}>ADD</Button>
    </Container>
  );
};

export default Form;
