import React from 'react';
import { useSelector } from 'react-redux';
import PhoneItem from './PhoneItem';

const PhoneList = () => {
    const phoneBook = useSelector((state) => state.phoneBook);
    return (
        <div>
            <PhoneItem phoneBook={phoneBook} />
        </div>
    );
};

export default PhoneList;