import React, { useState } from "react";
import { useSelector } from "react-redux";
import PhoneItem from "./PhoneItem";
import Update from "./Update";

const PhoneList = () => {
  const [editItemActive, setEditItemActive] = useState(null);
  const phoneBook = useSelector((state) => state.phoneBook);
  const editPhoneBookItem = (id) => {
    setEditItemActive(id);
  };
  return (
    <div>
        {editItemActive ? <Update key={editItemActive} updateId={editItemActive} update={setEditItemActive}/> :phoneBook.map((phone) => (
        <PhoneItem key={phone.id} phone={phone} editItem={editPhoneBookItem} />
      ))}
    </div>
  );
};

export default PhoneList;
