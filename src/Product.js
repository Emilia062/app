import React, {useState} from 'react';

const Product = (props) => {
    const [state, setState] = useState("closed");
    const [quantity, setQuantity] = useState(0);
    const [order, setOrder] = useState([])

    const handleOpen = () => {
        setState( "open");
    }

    const handleClose = () => {
        setState("closed");
    }

    const handleQuantity = (e) =>{
        setQuantity(e.target.value);
    }

    let sum = quantity * props.price;


    let orderItem = {
        name: props.name,
        sum: sum,
    }

    const handleAdd = (e) => {
        setOrder(orderItem)
    }

    return (
        <>
            <ul>
                <li>{props.title}</li>
                <li>{props.ingredients}</li>
            </ul>
            <span>{props.price} zł</span>
            {state === "closed" && (
                <div onClick={handleOpen}>Zamów!
                    <i className="fas fa-plus-circle"> </i>
                </div>
            )}
                {state === "open" && (
                    <>
                        <input type={"number"} value={quantity} placeholder={0} onChange={handleQuantity}/>
                        <i className="fas fa-plus" onClick={handleAdd}> </i><p>Dodaj do zamówienia</p>
                        <i className="fas fa-trash" onClick={handleClose}> </i>
                        {quantity !== 0 && (
                            <strong>{sum} zł</strong>
                        )}
                    </>
                )}
        </>
    );
};

export default Product;