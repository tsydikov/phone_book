import React from "react";
import { useSelector } from "react-redux";
import PhoneItem from "./PhoneItem";

const PhoneList = () => {
  const phoneBook = useSelector((state) => state.phoneBook);
  const editPhoneBookItem = () => {
      console.log('PhoneList');
  };
  return (
    <div>
      {phoneBook.map((phone) => (
        <PhoneItem key={phone.id} phone={phone} editItem={editPhoneBookItem}/>
      ))}
    </div>
  );
};

export default PhoneList;
