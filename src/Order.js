import React from 'react';
import PickedItem from "./PickedItem";
import {db} from "./firebase";
import {tableID} from "./index.js"


const Order = (props) => {
    const {pickedItems, setStatus, param} = props

    let toOrder= [];
    const handleDeleted = (e) => {
        let toOrder = pickedItems.filter((element, index) => {
            return index !== e.target.index;
        })
    }
    console.log(toOrder);

    let sumTotal = 0;
    pickedItems.map((item) => {
        if(item.status === "active"){
            sumTotal += item.sum;
        }
    })

    const isActive = pickedItems.map((item, index) =>{
        if(item.status === "active" && item.quantity > 0){
            return (
                <ul key={index} className={"order__row row"}>
                    <PickedItem title={item.title} quantity={item.quantity} sum={item.sum} pickedItems={pickedItems}
                    handleDeleted={handleDeleted} index={index}/>
                </ul>
            )
        }
    })

    const handleGetOrder = (e) =>{
        e.preventDefault();
        const date = new Date();
        pickedItems.map(item => {
            if(item.status === "active" && item.quantity > 0){
                let ID = Math.floor(Math.random()*(1000000000-1+1)+1);
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
        return (
            <div> Dziękujemy za zamówienie! </div>
        )
    }

    const handleHelp = (e) => {
        e.preventDefault();
        const date = new Date();
        let ID = Math.floor(Math.random()*(1000000000-1+1)+1);
        db.collection("help").doc(ID.toString()).set({
            ID,
            tableID: param,
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
                <div className={"order"}>
                    <div className={"order__border container--grid"}>
                        <ul className={"order__row row"}>
                            <li className={"col-3"}>Produkt</li>
                            <li className={"col-3"}>ilość</li>
                            <li className={"col-3"}>cena</li>
                            <li className={"col-3"}>usuń</li>
                        </ul>
                        {isActive}
                    </div>
                    <h2 className={"order__sum--title"}>SUMA</h2>
                    <h2 className={"order__sum"}>{sumTotal} zł</h2>
                    <div className={"order__buttons"}>
                    <button onClick={handleGetOrder} className={"btn"}>ZAMÓW</button>
                    <button onClick={handleHelp} className={"btn"}>Poproś o pomoc kelnera</button>
                    </div>
                </div>)
};

export default Order;