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
            <li className={"col-2"}>{ID}</li>
            <li className={"col-2"}>{tableID}</li>
            <li className={"col-2"}>{product}</li>
            <li className={"col-2"}>{quantity}</li>
            <li className={"col-2"}>{date}</li>
            <div className={"col-2 table__btn"}>
                <button onClick={handleDelete} className={"btn"}>Anuluj</button>
                <button onClick={handleComplete} className={"btn"}>Zakończ</button>
            </div>
        </>
    );
};

export default Dish;