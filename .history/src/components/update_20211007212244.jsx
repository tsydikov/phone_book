import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ updateId, update }) => {
  const dispatch = useDispatch();
  const phoneBook = useSelector((state) => state.phoneBook);
  const item = phoneBook.filter((phone) => phone.id === updateId);
  return <div>
      {item}
  </div>;
};

export default Update;
