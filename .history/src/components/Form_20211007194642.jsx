import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Form = () => {
    const [name,setName] = useState('')
    const [phone, setPhone] = useState('')
  const dispatch = useDispatch();
  const addNewPhoneBookItem = () => {

  };
  return (
    <Container>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={phone} onChange={e => setPhone(e.target.value)}/>
      <Button onClick={addNewPhoneBookItem}>ADD</Button>
    </Container>
  );
};

export default Form;
