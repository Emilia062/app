import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Dish from "./Dish"

const Kitchen = () => {
    const [ordersActive, setOrdersActive] = useState([]);
    const [ordersCompleted, setOrdersCompleted] = useState([]);
    const [ordersDeleted, setOrdersDeleted] = useState([]);

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}
    console.log("I")
    console.log(ordersActive)
    console.log(ordersDeleted)
    console.log(ordersCompleted)


    useEffect(() => {
        setOrdersActive([]);
        db.collection("orders").where("status", "==", "active")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setOrdersActive((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, [ordersActive])

    useEffect(() => {
        setOrdersCompleted([]);
        db.collection("orders").where("status", "==", "completed")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setOrdersCompleted((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, [ordersCompleted])

    useEffect(() => {
        setOrdersDeleted([]);
        db.collection("orders").where("status", "==", "deleted")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setOrdersDeleted((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    },[ordersDeleted])

    let sortOrdersActive = ordersActive.sort((a ,b) => {
        return b.OrderID - a.OrderID;
    });
    let ordersActiveJSX = sortOrdersActive.map((item, index) => {
            return(
                <form className={"row"} key={index}>
                    <Dish OrderID={item.OrderID} tableID={item.tableID} product={item.product} quantity={item.quantity}
                          date={item.date} ID={item.ID}/>
                </form>
            )
    })

    let sortOrdersDeleted = ordersDeleted.sort((a,b) => {
        return a.OrderID - b.OrderID;
    });
    let ordersDeletedJSX = sortOrdersDeleted.map((item, index) => {
            return(
                <ul key={index} className={"row"}>
                    <li className={"col-2"}>{item.OrderID}</li>
                    <li className={"col-2"}>{item.tableID}</li>
                    <li className={"col-2"}>{item.product}</li>
                    <li className={"col-2"}>{item.date}</li>
                    <li className={"col-2"}>{toPolish(item.status)}</li>
                    <li className={"col-2"}>{item.dateEnd}</li>
                </ul>
            )
    })
    let sortOrdersCompleted = ordersCompleted.sort((a,b) => {
        return a.OrderID - b.OrderID;
    });
    let ordersCompletedJSX = sortOrdersCompleted.map((item, index) => {
            return(
                <ul key={index} className={"row"}>
                    <li className={"col-2"}>{item.OrderID}</li>
                    <li className={"col-2"}>{item.tableID}</li>
                    <li className={"col-2"}>{item.product}</li>
                    <li className={"col-2"}>{item.date}</li>
                    <li className={"col-2"}>{toPolish(item.status)}</li>
                    <li className={"col-2"}>{item.dateEnd}</li>
                </ul>
            )
    })

    return (
        <div className={"container--grid"}>
            <div className={"service"}>
                <h1 className={"service__title"}> Kuchnia</h1>
                <h3 className={"service__table"}>Zamówienia aktywne</h3>
            </div>
            <ul className={"row table__titles"}>
                <li className={"col-2"}>ID</li>
                <li className={"col-2"}>Nr stolika</li>
                <li className={"col-2"}>Zamówiony produkt</li>
                <li className={"col-2"}>Ilość</li>
                <li className={"col-2"}>Data przyjęcia zamówienia</li>
                <li className={"col-2"}>Zmień status zamówienia</li>
            </ul>
            {ordersActiveJSX}
            <h3 className={"service__table"}>Zamówienia zakończone</h3>
            <ul className={"row table__titles"}>
                <li className={"col-2"}>ID</li>
                <li className={"col-2"}>Nr stolika</li>
                <li className={"col-2"}>Zamówiony produkt</li>
                <li className={"col-2"}>Data przyjęcia zamówienia</li>
                <li className={"col-2"}>Status</li>
                <li className={"col-2"}>Data zakończenia</li>
            </ul>
                {ordersCompletedJSX}
            <h3 className={"service__table"}>Zamówienia anulowane</h3>
            <ul className={"row table__titles"}>
                <li className={"col-2"}>ID</li>
                <li className={"col-2"}>Nr stolika</li>
                <li className={"col-2"}>Zamówiony produkt</li>
                <li className={"col-2"}>Data przyjęcia zamówienia</li>
                <li className={"col-2"}>Status</li>
                <li className={"col-2"}>Data anulowania</li>
            </ul>
                {ordersDeletedJSX}
        </div>
    );
};

export default Kitchen;