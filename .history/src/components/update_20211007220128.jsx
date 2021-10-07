import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../store/actions";

const Update = ({ updateId, update }) => {
  const phoneBook = useSelector((state) => state.phoneBook);
  const item = phoneBook.filter((phone) => phone.id === updateId);
  const [name, setName] = useState(item[0].name);
  const [phone, setPhone] = useState(item[0].phoneNamber);
  const dispatch = useDispatch();
  const updatePhoneBookItem = () => {
    const updatedItem = {
      id: item[0].id,
      name: name,
      phoneNamber: phone,
    };
    console.log(updatedItem);
    update(null);
    dispatch(updateItem(updatedItem))
    
  };

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
