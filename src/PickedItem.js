import React from 'react';

const PickedItem = (props) => {
   const {title, quantity, sum, pickedItems, setPickedItems, index} = props;
    console.log(index);

    let toOrder = [];
    const handleDeleted = () => {
        let toOrder = pickedItems.filter((element, i) => {
            return  i !== index;

        })
        setPickedItems(toOrder);
    }
    console.log(pickedItems)
    console.log(toOrder);


    return (
        <>
            <li className={"col-3"}>{title}</li>
            <li className={"col-3"}>{quantity}</li>
            <li className={"col-3"}>{sum} zł</li>
            <i className="fas fa-trash col-3" onClick={handleDeleted}> </i>
        </>
    );
};

export default PickedItem;