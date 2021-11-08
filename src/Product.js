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
        setQuantity(0);
    }

    const handleAccept = (e) => {
        e.preventDefault();

        let orderItem = {
            title,
            quantity: quantity,
            sum: quantity * props.price,
            status,
        }

        setPickedItems(state => {
            return [...state, orderItem]
        })
        setQuantity(0);
        setState("closed")
    }

    const handleAdd = () => {
        setQuantity(quantity + 1);
    }

    const handleSubtract = () => {
        if (quantity === 0){
            setQuantity(0)
        } else {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className={"section__product"}>
            <ul className={"product"}>
                <li className={"product__title"}>{title}</li>
                <li className={"product__ingredients"}>{ingredients}</li>
            </ul>
            <span className={"product__price"}>{price} zł</span>
            {state === "closed" && (
                <div onClick={handleOpen} className={"product__order"}>Zamów!
                    <i className="fas fa-plus-circle product__icon"> </i>
                </div>
            )}
                {state === "open" && (
                    <div className={"product__form"}>
                        <div className={"product__quantity"}>
                            <i className="fas fa-plus product__icon--plus" onClick={handleAdd}> </i>
                            <div>{quantity}</div>
                            <i className="fas fa-minus product__icon" onClick={handleSubtract}> </i>
                        </div>
                        {quantity !== 0 && (
                            <div className={"product__sum"}>Suma: {quantity * props.price} zł</div>
                        )}
                        <div className={"product__icons"}>
                            <div className={"product__add"}>
                                <i className="fas fa-check product__icon--plus" onClick={handleAccept}> </i>
                                <p>Dodaj do zamówienia</p>
                            </div>
                        <i className="fas fa-trash product__icon" onClick={handleClose}> </i>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Product;