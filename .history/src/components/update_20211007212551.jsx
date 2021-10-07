import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ updateId, update }) => {
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const phoneBook = useSelector((state) => state.phoneBook);
  const item = phoneBook.filter((phone) => phone.id == updateId);
  console.log(item);
  return <div>
      Update
  </div>;
};

export default Update;
