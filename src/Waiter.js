import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import Help from "./Help";


const Waiter = (props) => {
    // const [help, setHelp] = useState([])
    const [helpActive, setHelpActive] = useState([])
    const [helpDeleted, setHelpDeleted] = useState([])
    const [helpCompleted, setHelpCompleted] = useState([])

    console.log("II")

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

    // useEffect(() => {
    //     db.collection("help")
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 setHelp((state) => [
    //                     ...state,
    //                     {
    //                         ...doc.data(),
    //                         id: doc.id,
    //                     }
    //                 ])
    //             });
    //         });
    // }, [])

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
    //
    // const helpActive = help.filter((item) => {
    //     return item.status === "active"
    // })
    //
    // const helpCompleted = help.filter((item) => {
    //     return item.status === "completed"
    // })

    // const helpDeleted = help.filter((item) => {
    //     return item.status === "deleted"
    // })

    console.log(`Usunięte!:${helpDeleted}`)
    console.log(`Zakończone: ${helpCompleted}`)
    console.log(`Aktywne: ${helpActive}`)

    let helpActiveJSX = helpActive.map((item,index) => {
            return(
                <ul key={index} className={"row"}>
                    <Help msg={item.msg} tableID={item.tableID} date={item.date} status={item.status} ID={item.ID}/>
                </ul>
            )
        })

    let helpDeletedJSX = helpDeleted.map((item, index) => {
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

    let helpCompletedJSX = helpCompleted.map((item, index) => {
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
            <span className={"waiter__welcome"}>Witaj <span className={"waiter__welcome--name"}>{props.name}</span>! Owocnej pracy!</span>
            <h1 className={"waiter__title"}> Osługa kelnerska</h1>
            <div className={"container"}>Prośby o pomoc</div>
            <div className={"row"}>
            <div className={"col-3"}>nr stolika</div>
            <div className={"col-3"}>godzina</div>
            <div className={"col-3"}>anuluj</div>
            <div className={"col-3"}>zakończ</div>
            </div>
            {helpActiveJSX}
            <div className={"row"}>
                <span className={"col-6"}>Pomoc zakończona</span>
                {helpCompletedJSX}
                <span className={"col-6"}>Pomoc anulowana</span>
                {helpDeletedJSX}
            </div>

        </>
    );
};

export default Waiter;