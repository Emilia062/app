import React from 'react';

const Kitchen = (props) => {
    return (
        <>
            <span>Witaj {props.name}! Owocnej pracy!</span>
            <h1> Kuchnia</h1>
            <h2>Zamówienia</h2>
            <div>nr stolika</div>
            <div>Zamówienie</div>
            <div>godzina</div>
            <div>anuluj</div>
            <div>zakończ</div>
        </>
    );
};

export default Kitchen;