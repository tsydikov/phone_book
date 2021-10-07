import React from "react";
import { useSelector } from "react-redux";
import PhoneItem from "./PhoneItem";

const PhoneList = () => {
  const phoneBook = useSelector((state) => state.phoneBook);
  const editPhoneBookItem = (id) => {
      console.log(id);
  };
  return (
    <div>
      {phoneBook.map((phone) => (
        <PhoneItem key={phone.id} phone={phonee} editItem={editPhoneBookItem}/>
      ))}
    </div>
  );
};

export default PhoneList;
