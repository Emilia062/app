import React from 'react';

const PickedItem = (props) => {
   const {title, quantity, sum, pickedItems, handleDeleted} = props;


    return (
        <>
            <li>{title}</li>
            <li>{quantity}</li>
            <li>{sum}</li>
            <i className="fas fa-trash" onClick={handleDeleted}> </i>
        </>
    );
};

export default PickedItem;