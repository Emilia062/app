import React from 'react';
import {db} from "../firebase";

const Dish = (props) => {
    const {ID, tableID, product, quantity, date, OrderID} = props;

    //function to change status of order to completed
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

    //function to change status of order to deleted
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
            <div key={"a"} className={"col-2"}>{OrderID}</div>
            <div key={"b"} className={"col-2"}>{tableID}</div>
            <div key={"c"} className={"col-2"}>{product}</div>
            <div key={"d"} className={"col-2"}>{quantity}</div>
            <div key={"e"} className={"col-2"}>{date}</div>
            <div key={"f"} className={"col-2 table__btn"}>
                <div key={"fa"} onClick={handleDelete} className={"btn"}>Anuluj</div>
                <div key={"fb"} onClick={handleComplete} className={"btn"}>Zakończ</div>
            </div>
        </>
    );
};

export default Dish;