import React from 'react';
import { useSelector } from 'react-redux';
import PhoneItem from './PhoneItem';

const PhoneList = () => {
    const phoneBook = useSelector((state) => state.phoneBook);
    return (
        <div>
            {phoneBook.map(phone => 
                <PhoneItem key={phone.id} phone={phone} />
            )}
            
        </div>
    );
};

export default PhoneList;