import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Help from "./Help";


const Waiter = (props) => {
    const [helpActive, setHelpActive] = useState([])
    const [helpDeleted, setHelpDeleted] = useState([])
    const [helpCompleted, setHelpCompleted] = useState([])

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

    useEffect(() => {
        setHelpActive([]);
        db.collection("help").where("status", "==", "active")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHelpActive((state) => [
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
        setHelpCompleted([]);
        db.collection("help").where("status", "==", "completed")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHelpCompleted((state) => [
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
        setHelpDeleted([]);
        db.collection("help").where("status", "==", "deleted")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setHelpDeleted((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    },[])

    let helpActiveJSX = helpActive.map((item,index) => {
            return(
                <ul className={"row"} key={index}>
                    <Help msg={item.msg} tableID={item.tableID} date={item.date} status={item.status} ID={item.ID}/>
                </ul>
            )
        })

    let helpDeletedJSX = helpDeleted.map((item, index) => {
            return(
                <ul key={index} className={"row"}>
                    <li className={"col-2"} key={"a"}>{item.ID}</li>
                    <li className={"col-2"} key={"b"}>{item.msg}</li>
                    <li className={"col-2"} key={"c"}>{item.tableID}</li>
                    <li className={"col-2"} key={"d"}>{item.date}</li>
                    <li className={"col-2"} key={"e"}>{toPolish(item.status)}</li>
                    <li className={"col-2"} key={"f"}>{item.dateEnd}</li>
                </ul>
            )
    })

    let helpCompletedJSX = helpCompleted.map((item, index) => {
            return(
                <ul key={index} className={"row"}>
                    <li className={"col-2"} key={"a"}>{item.ID}</li>
                    <li className={"col-2"} key={"b"}>{item.msg}</li>
                    <li className={"col-2"} key={"c"}>{item.tableID}</li>
                    <li className={"col-2"} key={"d"}>{item.date}</li>
                    <li className={"col-2"} key={"e"}>{toPolish(item.status)}</li>
                    <li className={"col-2"} key={"f"}>{item.dateEnd}</li>
                </ul>
            )
    })

    return (
        <div className={"container--grid"}>
            <div className={"service"}>
                <span className={"service__welcome"}>Witaj <span className={"service__welcome--name"}>{props.name}</span>! Owocnej pracy!</span>
                <h1 className={"service__title"}> Obsługa kelnerska</h1>
                <h3 className={"service__table"}>Prośby o pomoc</h3>
            </div>
            <ul className={"row table__titles"}>
                <li className={"col-2"}>ID</li>
                <li className={"col-2"}>Wiadomość</li>
                <li className={"col-2"}>Numer stolika</li>
                <li className={"col-2"}>Data przyjęcia zgłoszenia</li>
                <li className={"col-2"}>Status</li>
                <li className={"col-2"}>Zmień status</li>
            </ul>
            {helpActiveJSX}
            <div>
                <h3 className={"service__table"}>Pomoc zakończona</h3>
                <ul className={"row table__titles"}>
                    <li className={"col-2"}>ID</li>
                    <li className={"col-2"}>Wiadomość</li>
                    <li className={"col-2"}>Numer stolika</li>
                    <li className={"col-2"}>Data przyjęcia zgłoszenia </li>
                    <li className={"col-2"}>Status</li>
                    <li className={"col-2"}>Data zakończenia zgłoszenia</li>
                </ul>
                {helpCompletedJSX}
                <h3 className={"service__table"}>Pomoc anulowana</h3>
                <ul className={"row table__titles"}>
                    <li className={"col-2"}>ID</li>
                    <li className={"col-2"}>Wiadomość</li>
                    <li className={"col-2"}>Numer stolika</li>
                    <li className={"col-2"}>Data przyjęcia zgłoszenia</li>
                    <li className={"col-2"}>Status</li>
                    <li className={"col-2"}>Data anulowania zgłoszenia</li>
                </ul>
                {helpDeletedJSX}
            </div>

        </div>
    );
};

export default Waiter;