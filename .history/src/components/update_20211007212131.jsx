import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Update = (props) => {
    const dispatch = useDispatch();
    const phoneBook = useSelector((state) => state.phoneBook);
    const item = state.phoneBook.filter(
        (phone) => phone.id === action.payload
      )
    return (
        <div>
            
        </div>
    );
};

export default Update;