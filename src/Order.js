import React, {useState} from 'react';

const Order = (props) => {
    const {pickedItems} = props
    const [sum, setSum] = useState([])

    setSum(state => [...state, pickedItems.sum])

    return (
                <div>
                    <div>
                        <p>Produkt</p>
                        <p>ilość</p>
                        <p>cena</p>
                        <p>usuń</p>
                    </div>
                    <ul>
                        {pickedItems.map((item) => {
                            return(
                                <>
                                    <ul>
                                        <li key={1}>{item.title}</li>
                                        <li key={2}>{item.quantity}</li>
                                        <li key={3}>{item.sum}</li>
                                        <i className="fas fa-trash" key={4}></i>
                                    </ul>
                                </>
                            )
                        })}

                    </ul>
                    <h2>SUMA</h2>
                    <h2>
                        {/*{sum.reduce((total, item) => {*/}
                        {/*        return total + item.sum;*/}
                        {/*    })}*/}
                    </h2>
                    <button>ZAMÓW</button>
            <button>Poproś o pomoc kelnera</button>
                </div>)
};

export default Order;