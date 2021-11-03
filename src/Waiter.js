import React from 'react';

const Waiter = (props) => {
    return (
        <>
            <span>Witaj {props.name}! Owocnej pracy!</span>
            <h1> Osługa kelnerska</h1>
            <div>Prośby o pomoc</div>
            <div>nr stolika</div>
            <div>godzina</div>
            <div>anuluj</div>
            <div>zakończ</div>
        </>
    );
};

export default Waiter;