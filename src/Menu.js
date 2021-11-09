import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Product from "./Product";
import Order from "./Order";
import {pizza} from "./assets/menu/menu";
import {menu} from "./assets/menu/menu";
import {pasta} from "./assets/menu/menu";
import {salads} from "./assets/menu/menu";
import {beverages} from "./assets/menu/menu";
import pizza3 from "./assets/pizza3.jpg";
import pastaFoto from "./assets/pasta.jpg";
import salad from "./assets/salad.jpg";
import foccaciaFoto from "./assets/pizza1.jpg";
import coffee from "./assets/coffee.jpg";

const Menu = () => {
    const [pickedItems,setPickedItems] = useState([]);
    const [status, setStatus] = useState("active");

    // const param = useParams();
    // console.log(param)

    // useEffect(() => {
    //     setPizza([]);
    //     db.collection("pizza")
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 setPizza((state) => [
    //                                     ...state,
    //                                     {
    //                                         ...doc.data(),
    //                                         id: doc.id,
    //                                     }
    //                                 ])
    //             });
    //     });
    // }, []);


    return (
        <form>
            <img src={pizza3} alt={"pizza"} className={"section__pic"}/>
            <h2 id={"pizza"} className={"section__title"}>Pizza</h2>
            {pizza.map((item, index) => {
               return(
                   <div key={index}>
                       <Product title={item.title} ingredients={item.ingredients}
                                price={item.price} setPickedItems={setPickedItems} status={status}/>
                   </div>
               )
            })}
            <img src={pastaFoto} alt={"pasta"} className={"section__pic"}/>
            <h2 id={"pasta"} className={"section__title"}>Makarony</h2>
            {pasta.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={foccaciaFoto} alt={"foccacia"} className={"section__pic"}/>
            <h2 id={"foccacia"} className={"section__title"}>Foccacia</h2>
            {menu.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={salad} alt={"salad"} className={"section__pic"}/>
            <h2 id={"salads"} className={"section__title"}>Sałatki</h2>
            {salads.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={coffee} alt={"coffee"} className={"section__pic"}/>
            <h2 id={"beverages"} className={"section__title"}>Kawa i napoje</h2>
            {beverages.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.description}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <Order pickedItems={pickedItems} setPickedItems={setPickedItems}/>
        </form>
    );
};

export default Menu;