import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Help from "./Help";


const Waiter = (props) => {
    const [help, setHelp] = useState([])

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

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
                <ul key={index} className={"row"}>
                    <Help msg={item.msg} tableID={item.tableID} date={item.date} status={item.status} ID={item.ID}/>
                </ul>
            )}
        })

    let helpDeleted = help.map((item, index) => {
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

    let helpCompleted = help.map((item, index) => {
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
            <span className={"waiter__welcome"}>Witaj <span className={"waiter__welcome--name"}>{props.name}</span>! Owocnej pracy!</span>
            <h1 className={"waiter__title"}> Osługa kelnerska</h1>
            <div className={"container"}>Prośby o pomoc</div>
            <div className={"row"}>
            <div className={"col-3"}>nr stolika</div>
            <div className={"col-3"}>godzina</div>
            <div className={"col-3"}>anuluj</div>
            <div className={"col-3"}>zakończ</div>
            </div>
            {helpActive}
            <div className={"row"}>
                <span className={"col-6"}>Pomoc zakończona</span>
                {helpCompleted}
                <span className={"col-6"}>Pomoc anulowana</span>
                {helpDeleted}
            </div>

        </>
    );
};

export default Waiter;