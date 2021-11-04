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
            <li>{ID}</li>
            <li>{msg}</li>
            <li>{tableID}</li>
            <li>{date}</li>
            <li>{toPolish(status)}</li>
            <button onClick={handleComplete}>Pomoc udzielona</button>
            <button onClick={handleDelete}>Anuluj</button>
        </>
    );
};

export default Help;