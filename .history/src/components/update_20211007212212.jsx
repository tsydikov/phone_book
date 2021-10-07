import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Update = ({updateId, update}) => {
    const dispatch = useDispatch();
    const phoneBook = useSelector((state) => state.phoneBook);
    const item = state.phoneBook.filter(
        (phone) => phone.id === updateId
      )
    return (
        <div>
            
        </div>
    );
};

export default Update;