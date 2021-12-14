import React, {useState} from 'react';
import PickedItem from "./PickedItem";
import {db} from "../firebase";

const Order = (props) => {
    const {pickedItems, setPickedItems, param} = props
    const [info, setInfo] = useState([]);

    //Variable which set total sum
    let sumTotal = 0;
    pickedItems.map((item) => {
        if(item.status === "active"){
            sumTotal += item.sum;
        }
    })

    //Check if picked items are active and if the quantity of them is bigger than 0
    const isActive = pickedItems.map((item, index) => {
        if(item.status === "active" && item.quantity > 0){
            return (
                <ul key={index} className={"order__row row"}>
                    <PickedItem title={item.title} quantity={item.quantity} sum={item.sum} pickedItems={pickedItems} setPickedItems={setPickedItems} index={index}/>
                </ul>
            )
        }
    })

    //Function to save the data of the order in firebase
    const handleGetOrder = (e) =>{
        e.preventDefault();
        const date = new Date();
        const OrderID = Math.floor(Math.random()*(1000000000-1+1)+1);
        pickedItems.map(item => {
            if(item.status === "active" && item.quantity > 0){
                let ID = Math.floor(Math.random()*(1000000000-1+1)+1);
                db.collection("orders").doc(ID.toString()).set({
                    OrderID,
                    ID,
                    product: item.title,
                    quantity: item.quantity,
                    sum: item.sum,
                    status: item.status,
                    tableID: param.table,
                    date: date.toLocaleString(),
                })
                    .then(() => {
                       setInfo( ["Dziękujemy za zamówienie"]);
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                        setInfo( ["Błąd przy wysyłaniu zamówienia. Prosimy o kontakt z obsługą"]);
                    });
            }
        })
        setPickedItems([]);
    };

    //function to save the data of help request in firebase
    const handleHelp = (e) => {
        e.preventDefault();
        const date = new Date();
        let ID = Math.floor(Math.random()*(1000000000-1+1)+1);
        db.collection("help").doc(ID.toString()).set({
            ID,
            tableID: param.table,
            msg: "Poproszono o obsługę kelnerską",
            date: date.toLocaleString(),
            status: "active",
        })
            .then(() => {
                console.log("Document successfully written!");
                setInfo(state => [...state, "Kelner zaraz do Państwa podejdzie"])
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                setInfo(state => [...state, "Nie udało się wysłać prośby. Prosimy o kontakt bezpośredni z obsługą"]);
            });
    };

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
                    {info.map((element,index) => {
                        return <div key={index} className={"order__info"}><i className="fas fa-bell order__icon"> </i>{element}</div>
                    })}
                </div>)
};

export default Order;