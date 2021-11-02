import React, {useState}from 'react';

import pizza from './assets/menu/pizza.js';
import pasta from './assets/menu/pasta';
import foccacia from "./assets/menu/foccacia";
import salads from "./assets/menu/salads";
import beverages from "./assets/menu/bevarages"

const Menu = () => {
    const [state, setState] = useState("closed");
    const [quantity, setQuantity] = useState(0);
    const [order,setOrder] = useState([])

    const handleAdd = () => {
        setState( "open");
    }

    const handleRemove = () => {
        setState ("closed");
    }

    return (
        <>
            <h2 id={"pizza"}>Pizza</h2>
            {pizza.map((item, index) => {
               return(
                   <div key={index}>
                       <div>
                       <h3>{item.title}</h3>
                       <div>{item.ingredients}</div>
                       </div>
                       <span>{item.price} zł</span>
                       <div onClick={handleAdd}>Zamów!
                       <i className="fas fa-plus-circle"></i>
                           {state === "open" && (
                               <>
                                   <form>
                                       <i className="fas fa-plus"></i>
                                       <input type={"number"} value={quantity} placeholder={"0"} onChange={e => setQuantity(e.target.value)}/>
                                       <i className="fas fa-minus"></i>
                                       <i className="fas fa-trash" onClick={handleRemove}></i>
                                   </form>

                               </>
                           )
                           }
                       </div>
                   </div>
               )
            })}
            <h2 id={"pasta"}>Makarony</h2>
            {pasta.map(((item, index) => {
                return (
                    <div key={index}>
                        <div>
                        <h3>{item.title}</h3>
                        <div>{item.ingredients}</div>
                        </div>
                        <span>{item.price} zł</span>
                        <div onClick={handleAdd}>Zamów!
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                )
            }))}
            <h2 id={"foccacia"}>Foccacia</h2>
            {foccacia.map(((item, index) => {
                return (
                    <div key={index}>
                        <div>
                        <h3>{item.title}</h3>
                        <div>{item.ingredients}</div>
                        </div>
                        <span>{item.price} zł</span>
                        <div onClick={handleAdd}>Zamów!
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                )
            }))}
            <h2 id={"salads"}>Sałatki</h2>
            {salads.map(((item, index) => {
                return (
                    <div key={index}>
                        <div>
                        <h3>{item.title}</h3>
                        <div>{item.ingredients}</div>
                        </div>
                        <span>{item.price} zł</span>
                        <div onClick={handleAdd}>Zamów!
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                )
            }))}
            <h2 id={"beverages"}>Kawa i napoje</h2>
            {beverages.map(((item, index) => {
                return (
                    <div key={index}>
                        <div>
                        <h3>{item.title}</h3>
                        <div>{item.description}</div>
                        </div>
                        <span>{item.price} zł</span>
                        <div onClick={handleAdd}>Zamów!
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                )
            }))}
        </>
    );
};

export default Menu;