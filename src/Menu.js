import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Product from "./Product";
import Order from "./Order";
import {pizza} from "./assets/menu/menu";
import {menu} from "./assets/menu/menu";
import {pasta} from "./assets/menu/menu";
import {salads} from "./assets/menu/menu";
import {beverages} from "./assets/menu/menu";
import pizzaFoto from "./assets/pizza3.jpg";
import pastaFoto from "./assets/pasta.jpg";
import saladFoto from "./assets/salad.jpg";
import foccaciaFoto from "./assets/foccacia.jpg";
import coffeeFoto from "./assets/coffee.jpg";

const Menu = () => {
    const [pickedItems,setPickedItems] = useState([]);
    const [status, setStatus] = useState("active");

    //Variable which sets table number
    const param = useParams();

    return (
        <form>
            <img src={pizzaFoto} alt={"pizza"} className={"section__pic"}/>
            <div className={"section__container"}>
                <div className={"line section__line"}> </div>
                <h2 id={"pizza"} className={"section__title"}>Pizza</h2>
                <div className={"line section__line"}> </div>
            </div>
            {pizza.map((item, index) => {
               return(
                   <div key={index}>
                       <Product title={item.title} ingredients={item.ingredients}
                                price={item.price} setPickedItems={setPickedItems} status={status}/>
                   </div>
               )
            })}
            <img src={pastaFoto} alt={"pasta"} className={"section__pic"}/>
            <div className={"section__container"}>
                <div className={"line section__line"}> </div>
                <h2 id={"pasta"} className={"section__title"}>Makarony</h2>
                <div className={"line section__line"}> </div>
            </div>
            {pasta.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={foccaciaFoto} alt={"foccacia"} className={"section__pic"}/>
            <div className={"section__container"}>
                <div className={"line section__line"}> </div>
                <h2 id={"foccacia"} className={"section__title"}>Foccacia</h2>
                <div className={"line section__line"}> </div>
            </div>
            {menu.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={saladFoto} alt={"salad"} className={"section__pic"}/>
            <div className={"section__container"}>
                <div className={"line section__line"}> </div>
                <h2 id={"salads"} className={"section__title"}>Sałatki</h2>
                <div className={"line section__line"}> </div>
            </div>
            {salads.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <img src={coffeeFoto} alt={"coffee"} className={"section__pic"}/>
            <div className={"section__container"}>
                <div className={"line section__line"}> </div>
                <h2 id={"beverages"} className={"section__title"}>Kawa i napoje</h2>
                <div className={"line section__line"}> </div>
            </div>
            {beverages.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.description}
                                 price={item.price} setPickedItems={setPickedItems} status={status}/>
                    </div>
                )
            })}
            <Order pickedItems={pickedItems} setPickedItems={setPickedItems} param={param}/>
        </form>
    );
};

export default Menu;