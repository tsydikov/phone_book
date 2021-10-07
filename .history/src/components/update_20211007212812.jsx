import React, { useState } from "react";
import { Container,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ updateId, update }) => {
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const phoneBook = useSelector((state) => state.phoneBook);
  const item = phoneBook.filter((phone) => phone.id == updateId);
  setName(item.name)
  console.log(item);
  return <Container>
  <input
  type="text"
    value={name}
    placeholder="Введите имя"
    onChange={(e) => setName(e.target.value)}
  />
  <input
  type="number"
    value={phone}
    placeholder="Введите телефон"
    onChange={(e) => setPhone(e.target.value)}
  />
  <Button onClick={}>ADD</Button>
</Container>
};

export default Update;
