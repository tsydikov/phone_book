import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const addNewPhoneBookItem = () => {
    newItem = {
        id: new Date(),
        name:name,

    }
    console.log(phone,name);
    setName('')
    setPhone('')
  };
  return (
    <Container>
      <input value={name} placeholder="Введите имя" onChange={(e) => setName(e.target.value)} />
      <input value={phone} placeholder="Введите телефон" onChange={(e) => setPhone(e.target.value)} />
      <Button onClick={addNewPhoneBookItem}>ADD</Button>
    </Container>
  );
};

export default Form;
