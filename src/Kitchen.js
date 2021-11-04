import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Dish from "./Dish"

const Kitchen = (props) => {
    const [orders, setOrders] = useState([])

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

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

    let ordersActive = orders.map((item) => {
        if(item.status === "active"){
            return(
                <ul>
                    <Dish ID={item.ID} tableID={item.tableID} product={item.product} quantity={item.quantity} status={item.status}
                          date={item.date}/>
                </ul>
            )}
    })

    let ordersDeleted = orders.map((item, index) => {
        if(item.status === "deleted"){
            return(
                <ul key={index}>
                    <li>{item.ID}</li>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{toPolish(item.status)}</li>
                    <li>{item.dateEnd}</li>
                </ul>
            )}
    })

    let ordersCompleted = orders.map((item, index) => {
        if(item.status === "completed"){
            return(
                <ul key={index}>
                    <li>{item.ID}</li>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{toPolish(item.status)}</li>
                    <li>{item.dateEnd}</li>
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