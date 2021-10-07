import React, { useState } from "react";
import { useSelector } from "react-redux";
import PhoneItem from "./PhoneItem";

const PhoneList = () => {
  const [editItemActive, setEditItemActive] = useState();
  const phoneBook = useSelector((state) => state.phoneBook);
  const editPhoneBookItem = (id) => {
    console.log(id);
  };
  return (
    <div>
      {phoneBook.map((phone) => (
        <PhoneItem key={phone.id} phone={phone} editItem={editPhoneBookItem} />
      ))}
    </div>
  );
};

export default PhoneList;
