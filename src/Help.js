import React from 'react';
import {db} from "./firebase";

const Help = (props) => {
    const {msg, tableID, date, status, ID} = props;

    const handleComplete = () => {
        const dateEnd = new Date();
        const statusChange = db.collection("help").doc(ID.toString());
        return statusChange.update({
            status: "completed",
            dateEnd: dateEnd.toLocaleString(),
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    const handleDelete = () => {
        const dateEnd = new Date();
        const statusChange = db.collection("help").doc(ID.toString());

        return statusChange.update({
            status: "deleted",
            dateEnd: dateEnd.toLocaleString(),
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

    return (
        <>
            <div className={"col-2"}>{ID}</div>
            <div className={"col-2"}>{msg}</div>
            <div className={"col-2"}>{tableID}</div>
            <div className={"col-2"}>{date}</div>
            <div className={"col-2"}>{toPolish(status)}</div>
            <div className={"col-2 table__btn"}>
            <button onClick={handleDelete} className={"btn"}>Anuluj</button>
            <button onClick={handleComplete} className={"btn"}>Zakończ</button>
            </div>
        </>
    );
};

export default Help;