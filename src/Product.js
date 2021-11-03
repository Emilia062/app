import React, {useState} from 'react';

const Product = (props) => {
    const {title, ingredients, price, pickedItems, setPickedItems, status} = props;
    const [state, setState] = useState("closed");
    const [quantity, setQuantity] = useState(0);


    const handleOpen = () => {
        setState( "open");
    }

    const handleClose = () => {
        setState("closed");
    }

    const handleQuantity = (e) =>{
        setQuantity(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();

        let orderItem = {
            title,
            quantity,
            sum: quantity * props.price,
            status,
        }

        setPickedItems(state => {
            return [...state, orderItem]
        })

        console.log(pickedItems)
        setState("closed")
    }

    return (
        <>
            <ul>
                <li>{title}</li>
                <li>{ingredients}</li>
            </ul>
            <span>{price} zł</span>
            {state === "closed" && (
                <div onClick={handleOpen}>Zamów!
                    <i className="fas fa-plus-circle"> </i>
                </div>
            )}
                {state === "open" && (
                    <>
                        <input type={"number"} value={quantity} placeholder={""} onChange={handleQuantity}/>
                        <i className="fas fa-plus" onClick={handleAdd}> </i><p>Dodaj do zamówienia</p>
                        <i className="fas fa-trash" onClick={handleClose}> </i>
                        {quantity !== 0 && (
                            <strong>{quantity * props.price} zł</strong>
                        )}
                    </>
                )}
        </>
    );
};

export default Product;