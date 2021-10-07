import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const addNewPhoneBookItem = () => {
    const newItem = {
      id: Date.now(),
      name: name,
      phone: phone,
    };
    if (name && phone) {
      dispatch(addItem(newItem));
      setName("");
      setPhone("");
    }
  };
  return (
    <Container>
      <input
        value={name}
        placeholder="Введите имя"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={phone}
        placeholder="Введите телефон"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button onClick={addNewPhoneBookItem}>ADD</Button>
    </Container>
  );
};

export default Form;
