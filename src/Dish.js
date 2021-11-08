import React from 'react';
import {db} from "./firebase";

const Dish = (props) => {
    const {ID, tableID, product, quantity, status, date, OrderID} = props;

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
            <div className={"col-2"}>{OrderID}</div>
            <div className={"col-2"}>{tableID}</div>
            <div className={"col-2"}>{product}</div>
            <div className={"col-2"}>{quantity}</div>
            <div className={"col-2"}>{date}</div>
            <div className={"col-2 table__btn"}>
                <button onClick={handleDelete} className={"btn"}>Anuluj</button>
                <button onClick={handleComplete} className={"btn"}>Zakończ</button>
            </div>
        </>
    );
};

export default Dish;