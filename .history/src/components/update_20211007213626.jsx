import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ updateId, update }) => {
  const phoneBook = useSelector((state) => state.phoneBook);
  const item = phoneBook.filter((phone) => phone.id === updateId);
  console.log(item);
  const [name, setName] = useState(item[0].name);
  const [phone, setPhone] = useState(item[0].phoneNamber);
  const dispatch = useDispatch();
const updatePhoneBookItem = () {
    
}
  
  return (
    <Container>
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
      <Button onClick={updatePhoneBookItem}>EDIT</Button>
    </Container>
  );
};

export default Update;
