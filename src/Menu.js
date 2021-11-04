import React, {useEffect, useState} from 'react';

import Product from "./Product";
import Order from "./Order";
import {db} from "./firebase";

const Menu = () => {
    const [pickedItems,setPickedItems] = useState([])
    const [status, setStatus] = useState("active");
    const [pizza, setPizza] = useState([])
    const [pasta, setPasta] = useState([])
    const [salads, setSalads] = useState([])
    const [foccacia, setFoccacia] = useState([])
    const [beverages, setBeverages] = useState([])

    useEffect(() => {
        db.collection("pizza")
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPizza((state) => [
                    ...state,
                    {
                        ...doc.data(),
                        id: doc.id,
                    }
                ])
            });
        });
    }, []);

    useEffect(() => {
        db.collection("pasta")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setPasta((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, []);

    useEffect(() => {
        db.collection("salads")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setSalads((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, []);

    useEffect(() => {
        db.collection("foccacia")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setFoccacia((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, []);

    useEffect(() => {
        db.collection("beverages")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setBeverages((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        }
                    ])
                });
            });
    }, []);

    return (
        <form>
            <h2 id={pizza}>Pizza</h2>
            {pizza.map((item, index) => {
               return(
                   <div key={index}>
                       <Product title={item.title} ingredients={item.ingredients}
                                price={item.price} pickedItems={pickedItems} setPickedItems={setPickedItems} status={status}/>
                   </div>
               )
            })}
            <h2 id={"pasta"}>Makarony</h2>
            {pasta.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} pickedItems={pickedItems} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <h2 id={"foccacia"}>Foccacia</h2>
            {foccacia.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} pickedItems={pickedItems} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <h2 id={"salads"}>Sałatki</h2>
            {salads.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} pickedItems={pickedItems} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <h2 id={"beverages"}>Kawa i napoje</h2>
            {beverages.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.description}
                                 price={item.price} pickedItems={pickedItems} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <Order pickedItems={pickedItems} setStatus={setStatus}/>
        </form>
    );
};

export default Menu;