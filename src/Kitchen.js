import React, {useEffect, useState} from 'react';
import {db} from "./firebase";

const Kitchen = (props) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection("orders")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setOrders((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, []);

    let ordersActive = orders.map((item, index) => {
        if(item.status === "active"){
            return(
                <ul key={index}>
                    <li>{item.tableID}</li>
                    <li>{item.product}</li>
                    <li>{item.quantity}</li>
                    <li>{item.status}</li>
                    <li>{item.date}</li>
                    <i className="fas fa-check"></i>
                    <i className="fas fa-trash"></i>
                </ul>
            )}
    })

    let ordersDeleted = orders.map((item, index) => {
        if(item.status === "deleted"){
            return(
                <ul key={index}>
                    <li>{item.tableID}</li>
                    <li>{item.product}</li>
                    <li>{item.quantity}</li>
                    <li>{item.status}</li>
                    <li>{item.date}</li>
                </ul>
            )}
    })

    let ordersCompleted = orders.map((item, index) => {
        if(item.status === "completed"){
            return(
                <ul key={index}>
                    <li>{item.tableID}</li>
                    <li>{item.product}</li>
                    <li>{item.quantity}</li>
                    <li>{item.status}</li>
                    <li>{item.date}</li>
                </ul>
            )}
    })


    return (
        <>
            <span>Witaj {props.name}! Owocnej pracy!</span>
            <h1> Kuchnia</h1>
            <h2>Zamówienia</h2>
            <div>nr stolika</div>
            <div>Zamówienie</div>
            <div>godzina</div>
            <div>anuluj</div>
            <div>zakończ</div>
            {ordersActive}
            <div>
                <span>Zamówienia zakończone</span>
                {ordersCompleted}
                <span>Zamówienia anulowane</span>
                {ordersDeleted}
            </div>

        </>
    );
};

export default Kitchen;