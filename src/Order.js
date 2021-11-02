import React from 'react';

const Order = () => {
    return (
        <div>
            <div>
            <p>Produkt</p>
            <p>ilość</p>
            <p>cena</p>
            <p>usuń</p>
            </div>
            <i className="fas fa-trash"></i>
            <ul>

            </ul>
            <h2>SUMA</h2>
            <button>ZAMÓW</button>
            <button>Poproś o pomoc kelnera</button>
            
        </div>
    );
};

export default Order;