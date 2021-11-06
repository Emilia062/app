import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Dish from "./Dish"

const Kitchen = (props) => {
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
    }, [])

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
    }, [])

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
    },[])

    // useEffect(() => {
    //     db.collection("orders")
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 setOrders((state) => [
    //                     ...state,
    //                     {
    //                         ...doc.data(),
    //                         id: doc.id,
    //                     }
    //                 ])
    //             });
    //         });
    // }, []);

    let ordersActiveJSX = ordersActive.map((item) => {
            return(
                <ul>
                    <Dish ID={item.ID} tableID={item.tableID} product={item.product} quantity={item.quantity} status={item.status}
                          date={item.date}/>
                </ul>
            )
    })

   let ordersDeletedJSX = ordersDeleted.map((item, index) => {
            return(
                <ul key={index}>
                    <li>{item.ID}</li>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{toPolish(item.status)}</li>
                    <li>{item.dateEnd}</li>
                </ul>
            )
    })

    let ordersCompletedJSX = ordersCompleted.map((item, index) => {
            return(
                <ul key={index}>
                    <li>{item.ID}</li>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{toPolish(item.status)}</li>
                    <li>{item.dateEnd}</li>
                </ul>
            )
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
            {ordersActiveJSX}
            <div>
                <span>Zamówienia zakończone</span>
                {ordersCompletedJSX}
                <span>Zamówienia anulowane</span>
                {ordersDeletedJSX}
            </div>

        </>
    );
};

export default Kitchen;