import React from 'react';
import {db} from "./firebase";

const Help = (props) => {
    const {msg, tableID, date, status, ID} = props;

    //function to change status of help request to completed
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

    //function to change status of help request to deleted
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

    //function to translate status to Polish
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
                <div onClick={handleDelete} className={"btn"}>Anuluj</div>
                <div onClick={handleComplete} className={"btn"}>Zakończ</div>
            </div>
        </>
    );
};

export default Help;