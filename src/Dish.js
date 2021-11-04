import React from 'react';
import {db} from "./firebase";

const Dish = (props) => {
    const {ID, tableID, product, quantity, status, date} = props;

    const toPolish = (status) => {if(status === "completed"){
        return "Zakończone"
    } else if(status === "deleted"){
        return "Usunięte"
    } else if(status === "active"){
        return "Aktywny"
    }}

    const handleComplete = () => {
        const dateEnd = new Date();
        const statusChange = db.collection("orders").doc(ID.toString());
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
        const statusChange = db.collection("orders").doc(ID.toString());

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

    return (
        <>
            <li>{ID}</li>
            <li>{tableID}</li>
            <li>{product}</li>
            <li>{quantity}</li>
            <li>{toPolish(status)}</li>
            <li>{date}</li>
            <i className="fas fa-check" onClick={handleComplete}></i>
            <i className="fas fa-trash" onClick={handleDelete}></i>
        </>
    );
};

export default Dish;