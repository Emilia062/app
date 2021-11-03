import React, {useEffect, useState} from 'react';
import {db} from "./firebase";


const Waiter = (props) => {
    const [help, setHelp] = useState([])
    const [date, setDate] = useState()
    const [status, setStatus] = useState()

    useEffect(() => {
        db.collection("help")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHelp((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, [])

    let helpActive = help.map((item,index) => {
        if(item.status === "active"){
            return(
                <ul key={index}>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{item.status}</li>
                    <i className="fas fa-check"> </i>
                    <i className="fas fa-trash"> </i>
                </ul>
            )}
        })

    let helpDeleted = help.map((item, index) => {
        if(item.status === "deleted"){
            return(
                <ul key={index}>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{item.status}</li>
                </ul>
            )}
    })

    let helpCompleted = help.map((item, index) => {
        if(item.status === "completed"){
            return(
                <ul key={index}>
                    <li>{item.msg}</li>
                    <li>{item.tableID}</li>
                    <li>{item.date}</li>
                    <li>{item.status}</li>
                </ul>
            )}
    })

    return (
        <>
            <span className={"waiter__welcome"}>Witaj <span className={"waiter__welcome--name"}>{props.name}</span>! Owocnej pracy!</span>
            <h1 className={"waiter__title"}> Osługa kelnerska</h1>
            <div>Prośby o pomoc</div>
            <div>nr stolika</div>
            <div>godzina</div>
            <div>anuluj</div>
            <div>zakończ</div>
            {helpActive}
            <div>
                <span>Pomoc zakończona</span>
                {helpCompleted}
                <span>Pomoc anulowana</span>
                {helpDeleted}
            </div>

        </>
    );
};

export default Waiter;