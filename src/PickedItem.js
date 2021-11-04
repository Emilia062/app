import React from 'react';

const PickedItem = (props) => {
   const {title, quantity, sum} = props;

    return (
        <>
            <li>{title}</li>
            <li>{quantity}</li>
            <li>{sum}</li>
            <i className="fas fa-trash"></i>
        </>
    );
};

export default PickedItem;