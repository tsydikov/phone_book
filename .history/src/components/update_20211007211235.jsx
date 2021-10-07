import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Update = () => {
    const dispatch = useDispatch();
    const phoneBook = useSelector((state) => state.phoneBook);
    return (
        <div>
            
        </div>
    );
};

export default Update;