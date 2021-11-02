import React, {useState}from 'react';

import pizza from './assets/menu/pizza.js';
import pasta from './assets/menu/pasta';
import foccacia from "./assets/menu/foccacia";
import salads from "./assets/menu/salads";
import beverages from "./assets/menu/bevarages"
import Product from "./Product";
import Order from "./Order";

const Menu = () => {
    const [order,setOrder] = useState([])

    return (
        <form>
            <h2 id={"pizza"}>Pizza</h2>
            {pizza.map((item, index) => {
               return(
                   <div key={index}>
                       <Product title={item.title} ingredients={item.ingredients}
                                price={item.price} order={order} setOrder={setOrder}/>
                   </div>
               )
            })}
            <h2 id={"pasta"}>Makarony</h2>
            {pasta.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} order={order} setOrder={setOrder} />
                    </div>
                )
            })}
            <h2 id={"foccacia"}>Foccacia</h2>
            {foccacia.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} order={order} setOrder={setOrder}/>
                    </div>
                )
            })}
            <h2 id={"salads"}>Sałatki</h2>
            {salads.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.ingredients}
                                 price={item.price} order={order} setOrder={setOrder}/>
                    </div>
                )
            })}
            <h2 id={"beverages"}>Kawa i napoje</h2>
            {beverages.map((item, index) => {
                return (
                    <div key={index}>
                        <Product title={item.title} ingredients={item.description}
                                 price={item.price} order={order} setOrder={setOrder}/>
                    </div>
                )
            })}
            <Order/>
        </form>
    );
};

export default Menu;