import React from 'react';
import PickedItem from "./PickedItem";
import {db} from "./firebase";
import {tableID} from "./index";

const Order = (props) => {
    const {pickedItems, setStatus} = props

    let sumTotal = 0;
    pickedItems.map((item) => {
        if(item.status === "active"){
            sumTotal += item.sum;
        }
    })

    const isActive = pickedItems.map((item, index) =>{
        if(item.status === "active" && item.quantity > 0){
            return (
                <ul key={index}>
                    <PickedItem title={item.title} quantity={item.quantity} sum={item.sum}/>
                </ul>
            )
        }
    })

    const handleGetOrder = () =>{
        const date = new Date();
        pickedItems.map(item => {
            if(item.status === "active" && item.quantity > 0){
                let ID = Math.floor(Math.random()*(1000-1+1)+1);
                db.collection("orders").doc(ID.toString()).set({
                    ID,
                    product: item.title,
                    quantity: item.quantity,
                    sum: item.sum,
                    status: item.status,
                    tableID: tableID,
                    date: date.toLocaleString(),
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        })
    }

    const handleHelp = () => {
        const date = new Date();
        let ID = Math.floor(Math.random()*(1000-1+1)+1);
        db.collection("help").doc(ID.toString()).set({
            ID,
            tableID: tableID,
            msg: "Poproszono o obsługę kelnerską",
            date: date.toLocaleString(),
            status: "active",
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
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