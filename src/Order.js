import React, {useState} from 'react';
import {db} from "./firebase";
import {tableID} from "./index";

const Order = (props) => {
    const {pickedItems, setStatus} = props
    const [statusHelp, setStatusHelp] = useState("active")

    let sumTotal = 0;
    pickedItems.map((item) => {
        if(item.status === "active"){
            sumTotal += item.sum;
        }
    })

    const handleRemove = () => {
        setStatus("remove");
    }

    const isActive = pickedItems.map((item, index) =>{
        if(item.status === "active" && item.quantity > 0){
            return (
                <ul key={index}>
                    <li key={11}>{item.title}</li>
                    <li key={21}>{item.quantity}</li>
                    <li key={31}>{item.sum}</li>
                    <i className="fas fa-trash" key={41} onClick={handleRemove}> </i>
                </ul>
            )
        }
    })

    const handleGetOrder = () =>{
        const date = new Date();
        pickedItems.map(item => {
            if(item.status === "active" && item.quantity > 0){
                db.collection("orders").add({
                    product: item.title,
                    quantity: item.quantity,
                    sum: item.sum,
                    status: item.status,
                    tableID: tableID,
                    date: date.toLocaleString(),
                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            }
        })
    }

    const handleHelp = () => {
        const date = new Date();
        db.collection("help").add({
            tableID: tableID,
            msg: "Poproszono o obsługę kelnerską",
            date: date.toLocaleString(),
            status: statusHelp,
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }




    return (
                <div>
                    <div>
                        <p>Produkt</p>
                        <p>ilość</p>
                        <p>cena</p>
                        <p>usuń</p>
                    </div>
                    <ul>
                        {isActive}
                    </ul>
                    <h2>SUMA</h2>
                    <h2>
                        {sumTotal}
                    </h2>
                    <button onClick={handleGetOrder}>ZAMÓW</button>
            <button onClick={handleHelp}>Poproś o pomoc kelnera</button>
                </div>)
};

export default Order;